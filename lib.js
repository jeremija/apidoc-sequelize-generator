#!/usr/bin/env node
'use strict';
const sequelize = require('../src/db.js');
const _ = require('underscore');

function printer() {
  let value = '';

  function print(/* vararg */) {
    let args = [].slice.call(arguments);
    value += '\n * ' + args.join(' ');
    return self;
  }

  let footerCalled = false;

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

  let self = {
    print,
    header,
    footer,
    value: () => value,
    stdout: () => {
      console.log(value);
    }
  };
  return self;
}

const samples = {
  UUID: '413e8630-c16c-11e5-b8c9-9b7d37852114',
  BIGINT: 1,
  INTEGER: 1,
  ENUM: type => type.values.join(' | '),
  STRING: 'string',
  DATE: '2015-12-31T23:59:59.123',
  TEXT: 'text'
};

function createObject(model, options) {
  options = options || {};
  let include = options.include;
  let includeAll = !include;
  let ignoredFields = options.ignoredFields;
  let root = {};

  let stack = [{
    obj: root,
    model,
    include
  }];

  let previousModels = [];

  while(stack.length) {
    let data = stack.pop();
    let model = data.model;
    if (typeof model === 'string') model = sequelize.model(model);

    let obj = data.obj;

    let include = data.include;
    let association = data.association;
    let associationName = data.associationName;
    let parent = data.parent;

    if (includeAll && previousModels.indexOf(model.tableName) >= 0) {
      if (parent && association && associationName) {
        let isArray = association.associationType === 'HasMany';
        parent[associationName] = isArray ? [{}] : {};
        continue;
      }
    }
    previousModels.push(model.tableName);


    _.each(model.rawAttributes, (attr, attrName) => {
      if (ignoredFields.indexOf(attrName) >= 0) return;
      let sample = samples[attr.type.key];
      if (typeof sample === 'function') {
        sample = sample(attr.type);
      }
      obj[attrName] = sample;
    });

    _.each(model.associations, (association, associationName) => {
      let newInclude;
      let found = include && include.some(inc => {
        let found = inc.model && association.target;
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
        association,
        associationName,
        model: association.target
      });
    });

    if (parent && association && associationName) {
      let isArray = association.associationType === 'HasMany';
      parent[associationName] = isArray ? [obj] : obj;
    }
  }

  return root;
}

function defineDoc(model, modelName, type) {
  let p = printer().header(modelName = type);
  _.each(model.rawAttributes, (attr, attrName) => {
    p.print(
      '@api' + type, '{' + attr.type.key.toLowerCase() + '}', attrName
    );
  });
  _.each(model.associations, (association, associationName) => {
    let _type = association.target.tableName;
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
  let p = printer().header(objName + exampleType);
  p.print('@api' + exampleType + 'Example {json}', exampleType);
  let lines = JSON.stringify(obj, null, '  ').split('\n');
  lines.forEach(line => p.print('    ' + line));
  return p.footer();
}

function defineExamples(model, options) {
  let name = model.tableName;
  let obj = createObject(model, options);

  let request = defineExample(obj, name, 'Request', false).value();
  let requestArray = defineExample(obj, name, 'Request', true).value();

  let response = defineExample(obj, name, 'Success', false).value();
  let responseArray = defineExample(obj, name, 'Success', true).value();

  return request + requestArray + response + responseArray;
}

let examples = defineExamples(sequelize.models.form, {
  ignoredFields: ['createdAt', 'updatedAt'],
  include: [{
    model: 'group',
    include: [{
      model: 'element'
    }]
  }]
});

console.log('examples', examples);

// defineExample(obj, sequelize.models.formTableName, k

// defineExample(sequelize.models.form, 'Request', {
//   ignoredFields: ['createdAt', 'updatedAt'],
//   include: [{
//     model: 'group',
//     include: [{
//       model: 'element'
//     }]
//   }]
// }).stdout();

module.exports = { defineDoc, defineExample, createObject };
