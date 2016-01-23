'use strict';
var _ = require('underscore');

function printer() {
  var value = '';

  function print(/* vararg */) {
    var args = [].slice.call(arguments);
    value += '\n * ' + args.join(' ');
    return self;
  }

  var footerCalled = false;

  function header(name) {
    value = '/**';
    value += '\n * @apiDefine ' + name;
    return self;
  }

  function footer() {
    if (footerCalled) return;
    footerCalled = true;
    value += '\n */\n\n';
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

var samples = {
  UUID: '413e8630-c16c-11e5-b8c9-9b7d37852114',
  BIGINT: 1,
  INTEGER: 1,
  ENUM: function() { return type.values.join(' | '); },
  STRING: 'string',
  DATE: '2015-12-31T23:59:59.123',
  TEXT: 'text'
};

function createObject(model, options) {
  options = options || {};
  var include = options.include;
  var includeAll = !include;
  var ignoredFields = options.ignoredFields;
  var root = {};

  var stack = [{
    obj: root,
    model: model,
    include: include
  }];

  var previousModels = [];

  while(stack.length) {
    var data = stack.pop();
    var model = data.model;
    if (typeof model === 'string') model = sequelize.model(model);

    var obj = data.obj;

    var include = data.include;
    var association = data.association;
    var associationName = data.associationName;
    var parent = data.parent;

    if (includeAll && previousModels.indexOf(model.tableName) >= 0) {
      if (parent && association && associationName) {
        var isArray = association.associationType === 'HasMany';
        parent[associationName] = isArray ? [{}] : {};
        continue;
      }
    }
    previousModels.push(model.tableName);


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
        var found = inc.model && association.target;
        if (found) {
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
      var isArray = association.associationType === 'HasMany';
      parent[associationName] = isArray ? [obj] : obj;
    }
  }

  return root;
}

function defineDoc(model, modelName, type) {
  var p = printer().header(modelName = type);
  _.each(model.rawAttributes, function(attr, attrName) {
    p.print(
      '@api' + type, '{' + attr.type.key.toLowerCase() + '}', attrName
    );
  });
  _.each(model.associations, function(association, associationName) {
    var _type = association.target.tableName;
    if (association.associationType === 'HasMany') {
      _type += '[]';
    }
    p.print('@api' + type, '{' + _type + '}', associationName);
  });

  return p.footer();
}

function defineExample(obj, objName, exampleType, isArray) {
  if (isArray) {
    obj = [obj];
    objName += 'Array';
  }
  var p = printer().header(objName + exampleType);
  p.print('@api' + exampleType + 'Example {json}', exampleType);
  var lines = JSON.stringify(obj, null, '  ').split('\n');
  lines.forEach(function(line) { p.print('    ' + line); });
  return p.footer();
}

function defineExamples(model, options) {
  var name = model.tableName;
  var obj = createObject(model, options);

  var request = defineExample(obj, name, 'Request', false).value();
  var requestArray = defineExample(obj, name, 'Request', true).value();

  var response = defineExample(obj, name, 'Success', false).value();
  var responseArray = defineExample(obj, name, 'Success', true).value();

  return request + requestArray + response + responseArray;
}

function auto(sequelize, options) {
  _.each(sequelize.models, function(model, key) {
    defineExamples(model, options[model.tableName]);
  });
}

var examples = defineExamples(sequelize.models.form, {
  ignoredFields: ['createdAt', 'updatedAt'],
  include: [{
    model: 'group',
    include: [{
      model: 'element'
    }]
  }]
});

console.log('examples', examples);

module.exports = {
  auto: auto,
  createObject: createObject,
  defineDoc: defineDoc,
  defineExample: defineExample,
  defineExamples: defineExamples
};
