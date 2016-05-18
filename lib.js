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

var exampleTypes = {
  Request: 'Param',
  Response: 'Success'
};

function isAssocAnArray(associationType) {
  return associationType === 'HasMany' || associationType === 'BelongsToMany';
}

function create(sequelize, samples) {
  samples = _.extend(defaultSamples, samples);

  function printer() {
    var value = '';

    function print(/* vararg */) {
      var args = [].slice.call(arguments);
      value += '\n * ' + args.join(' ');
      return self;
    }

    function header() {
      value = '/**';
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
        var isArray = isAssocAnArray(association.associationType);
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
        var array = isAssocAnArray(association.associationType);
        parent[associationName] = array ? [obj] : obj;
      }
    }

    return root;
  }

  function _capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function defineJsdoc(model) {
    var p = printer();
    p.header().print('@typedef {Object}', _capitalizeFirstLetter(model.name));
    _.each(model.rawAttributes, function(attr, attrName) {
      if (attr.allowNull) attrName = '[' + attrName + ']';
      var type = (attr.type.key || attr.type).toLowerCase();
      p.print(
        '@property', '{' + _capitalizeFirstLetter(type) + '}', attrName
      );
    });
    _.each(model.associations, function(association, associationName) {
      var _type = _capitalizeFirstLetter(association.target.name);
      var fkAttributes = association.target.rawAttributes[association.foreignKey];
      var allowNull = fkAttributes ? fkAttributes.allowNull : false;
      if (isAssocAnArray(association.associationType)) {
        _type = 'Array.<' + _type + '>';
      } else if (allowNull) {
        associationName = '[' + associationName + ']';
      }
      p.print('@property', '{' + _type + '}', associationName);
    });

    return p.footer().value();
  }

  function defineDoc(model, type) {
    var p = printer().header().print('@apiDefine', model.name + type);
    _.each(model.rawAttributes, function(attr, attrName) {
      if (attr.allowNull) attrName = '[' + attrName + ']';
      var type = (attr.type.key || attr.type).toLowerCase();
      p.print(
        '@apiParam', '{' + type + '}', attrName
      );
    });
    _.each(model.associations, function(association, associationName) {
      var _type = association.target.name;
      var fkAttributes = association.target.rawAttributes[association.foreignKey];
      var allowNull = fkAttributes ? fkAttributes.allowNull : false;
      if (isAssocAnArray(association.associationType)) {
        _type += '[]';
      } else if (allowNull) {
        associationName = '[' + associationName + ']';
      }
      p.print('@apiParam', '{' + _type + '}', associationName);
    });

    return p.footer().value();
  }

  function defineExample(name, type, obj, isArray) {
    if (isArray) {
      obj = [obj];
      name += 'Array';
    }
    var p = printer().header().print('@apiDefine', name + type);
    var exampleType = exampleTypes[type];
    p.print('@api' + exampleType + 'Example {json}', type);
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

    var success = defineExample(name, 'Response', obj, false);
    var successArray = defineExample(name, 'Response', obj, true);

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
    defineJsdoc: defineJsdoc,
    defineExample: defineExample,
    defineAll: defineAll
  };

  return self;
}

module.exports = create;
