'use strict';
var _ = require('underscore');

var defaultSamples = {
  UUID: '413e8630-c16c-11e5-b8c9-9b7d37852114',
  BIGINT: 1,
  INTEGER: 1,
  ENUM: function(type) { return type.values.join(' | '); },
  STRING: 'string',
  DATE: '2015-12-31T23:59:59.123',
  TEXT: 'text'
};

function create(sequelize, samples) {
  samples = _.extend(defaultSamples, samples);

  function printer() {
    var value = '';

    function print(/* vararg */) {
      var args = [].slice.call(arguments);
      value += '\n * ' + args.join(' ');
      return self;
    }

    function header(name) {
      value = '/**';
      value += '\n * @apiDefine ' + name;
      return self;
    }

    function footer() {
      value += '\n */\n';
      return self;
    }

    var self = {
      print: print,
      header: header,
      footer: footer,
      value: function() { return value; }
    };
    return self;
  }

  function createObject(model, options) {
    options = options || {};
    var include = options.include;
    var includeAll = !include;
    var ignoredFields = options.ignoredFields || [];
    var root = {};

    var stack = [{
      obj: root,
      model: model,
      include: include
    }];

    var previousModels = [];

    while (stack.length) {
      var data = stack.pop();
      model = data.model;

      var obj = data.obj;

      include = data.include;
      var association = data.association;
      var associationName = data.associationName;
      var parent = data.parent;

      if (includeAll && previousModels.indexOf(model.name) >= 0) {
        var isArray = association.associationType === 'HasMany';
        parent[associationName] = isArray ? [{}] : {};
        continue;
      }
      previousModels.push(model.name);


      _.each(model.rawAttributes, function(attr, attrName) {
        if (ignoredFields.indexOf(attrName) >= 0) return;
        var sample = samples[attr.type.key];
        if (typeof sample === 'function') {
          sample = sample(attr.type);
        }
        obj[attrName] = sample;
      });

      _.each(model.associations, function(association, associationName) {
        var newInclude;
        var found = include && include.some(function(inc) {
          var model = inc.model;
          model = sequelize.model(model);
          if (model === association.target) {
            newInclude = inc.include;
            return true;
          }
        });
        if (!includeAll && !found) return;

        stack.push({
          obj: {},
          parent: obj,
          include: newInclude,
          association: association,
          associationName: associationName,
          model: association.target
        });
      });

      if (parent && association && associationName) {
        var array = association.associationType === 'HasMany';
        parent[associationName] = array ? [obj] : obj;
      }
    }

    return root;
  }

  function defineDoc(model, type) {
    var p = printer().header(model.name + type);
    _.each(model.rawAttributes, function(attr, attrName) {
      if (attr.allowNull) attrName = '[' + attrName + ']';
      p.print(
        '@apiParam', '{' + attr.type.key.toLowerCase() + '}', attrName
      );
    });
    _.each(model.associations, function(association, associationName) {
      var _type = association.target.name;
      var fkAttributes = association.target.rawAttributes[association.foreignKey];
      var allowNull = fkAttributes ? fkAttributes.allowNull : false;
      if (association.associationType === 'HasMany') {
        _type += '[]';
      } else if (allowNull) {
        associationName = '[' + associationName + ']';
      }
      p.print('@apiParam', '{' + _type + '}', associationName);
    });

    return p.footer().value();
  }

  function defineExample(name, exampleType, obj, isArray) {
    if (isArray) {
      obj = [obj];
      name += 'Array';
    }
    var p = printer().header(name + exampleType);
    p.print('@api' + exampleType + 'Example {json}', exampleType);
    var lines = JSON.stringify(obj, null, '  ').split('\n');
    lines.forEach(function(line) {
      p.print('    ' + line);
    });
    return p.footer().value();
  }

  function _docToString() {
    var string = '';
    _.each(this, function(value) {
      string += value + '\n';
    });
    return string;
  }

  function defineAll(model, options) {
    var name = model.name;
    var obj = createObject(model, options);

    var request = defineExample(name, 'Request', obj, false);
    var requestArray = defineExample(name, 'Request', obj, true);

    var success = defineExample(name, 'Success', obj, false);
    var successArray = defineExample(name, 'Success', obj, true);

    var proto = Object.create({ toString: _docToString });
    var doc = _.extend(proto, {
      param: defineDoc(model, 'Param'),
      request: request,
      requestArray: requestArray,
      success: success,
      successArray: successArray
    });

    return doc;
  }

  function _allDocToString() {
      var string = '';
      _.each(this, function(docs) {
        string += docs.toString();
      });
      return string;
  }

  function auto(options) {
    options = options || {};
    var results = {};
    _.each(sequelize.models, function(model) {
      results[model.name] = defineAll(model, options[model.name]);
    });

    var proto = Object.create({ toString: _allDocToString });
    return _.extend(proto, results);
  }

  var self = {
    auto: auto,
    createObject: createObject,
    defineDoc: defineDoc,
    defineExample: defineExample,
    defineAll: defineAll
  };

  return self;
}

module.exports = create;
