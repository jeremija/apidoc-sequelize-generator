# apidoc-sequelize-generator

[![Build Status](https://travis-ci.org/jeremija/apidoc-sequelize-generator.svg?branch=master)](https://travis-ci.org/jeremija/apidoc-sequelize-generator)

Automatically generate definitions for [apidoc](http://apidocjs.com/) from
sequelize models.

# installation

```bash
npm install apidoc-sequelize-generator
```

# usage

## quick example

Here is a full example along with sequelize model definitions generating the
apidoc comments:

```javascript
var Sequelize = require('sequelize');
var sequelize = new Sequelize('sqlite://');
var gendoc = require('apidoc-sequelize-generator');

var parent = sequelize.define('parent', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

var child = sequelize.define('child', {
  name: {
    type: Sequelize.STRING,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

parent.hasMany(child);

var docs = gendoc(sequelize).auto().toString();

console.log(docs);
```

The output will contain apidoc comments which can then be reused by using
`@apiUse <name>` any time the specific model is expected in object body or
response:

```javascript
/**
 * @apiDefine parentParam
 * @apiParam {integer} id
 * @apiParam {string} name
 * @apiParam {date} createdAt
 * @apiParam {date} updatedAt
 * @apiParam {child[]} children
 */

/**
 * @apiDefine parentRequest
 * @apiRequestExample {json} Request
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "children": [
 *         {
 *           "id": 1,
 *           "name": "string",
 *           "birthday": "2015-12-31T23:59:59.123",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1
 *         }
 *       ]
 *     }
 */

/**
 * @apiDefine parentArrayRequest
 * @apiRequestExample {json} Request
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "children": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "birthday": "2015-12-31T23:59:59.123",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1
 *           }
 *         ]
 *       }
 *     ]
 */

/**
 * @apiDefine parentSuccess
 * @apiSuccessExample {json} Success
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "children": [
 *         {
 *           "id": 1,
 *           "name": "string",
 *           "birthday": "2015-12-31T23:59:59.123",
 *           "createdAt": "2015-12-31T23:59:59.123",
 *           "updatedAt": "2015-12-31T23:59:59.123",
 *           "parentId": 1
 *         }
 *       ]
 *     }
 */

/**
 * @apiDefine parentArraySuccess
 * @apiSuccessExample {json} Success
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "children": [
 *           {
 *             "id": 1,
 *             "name": "string",
 *             "birthday": "2015-12-31T23:59:59.123",
 *             "createdAt": "2015-12-31T23:59:59.123",
 *             "updatedAt": "2015-12-31T23:59:59.123",
 *             "parentId": 1
 *           }
 *         ]
 *       }
 *     ]
 */

/**
 * @apiDefine childParam
 * @apiParam {integer} id
 * @apiParam {string} name
 * @apiParam {date} [birthday]
 * @apiParam {date} createdAt
 * @apiParam {date} updatedAt
 * @apiParam {integer} [parentId]
 */

/**
 * @apiDefine childRequest
 * @apiRequestExample {json} Request
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "birthday": "2015-12-31T23:59:59.123",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1
 *     }
 */

/**
 * @apiDefine childArrayRequest
 * @apiRequestExample {json} Request
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "birthday": "2015-12-31T23:59:59.123",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1
 *       }
 *     ]
 */

/**
 * @apiDefine childSuccess
 * @apiSuccessExample {json} Success
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "birthday": "2015-12-31T23:59:59.123",
 *       "createdAt": "2015-12-31T23:59:59.123",
 *       "updatedAt": "2015-12-31T23:59:59.123",
 *       "parentId": 1
 *     }
 */

/**
 * @apiDefine childArraySuccess
 * @apiSuccessExample {json} Success
 *     [
 *       {
 *         "id": 1,
 *         "name": "string",
 *         "birthday": "2015-12-31T23:59:59.123",
 *         "createdAt": "2015-12-31T23:59:59.123",
 *         "updatedAt": "2015-12-31T23:59:59.123",
 *         "parentId": 1
 *       }
 *     ]
 */
```

This code is located in [example](example) directory.

## description of other methods

If you already have sequelize model definitions and wish to automatically
generate documentation of it's models, you can do so easily:

```javascript
var docgen = require('apidoc-sequelize-generator');
var sequelize = require('./path/to/my/sequelize/instance.js');

/*
 * automatically generate documentation for all model definitions
 */
var docs = docgen(sequelize).auto();
console.log(docs.toString());

/*
 * only include the child association for myModel
 */
docs = docgen(sequelize).auto({
  myModel: {
    include: [{
      model: 'child'
    }]
  }
});
// all model definitions, but myModel will only contain the child association
console.log(docs.toString());


/*
 * add custom samples for certain type definitions
 */
docs = docgen(sequelize, {
  DATE: '2015-12-31 23:59:59'
}).auto();
console.log(docs.toString())


/*
 * create a sample object
 */
var object = docgen(sequelize).createObject(sequelize.models.myModel);
console.log(object);

/*
 * create a params definition for object
 */
object = docgen(sequelize).defineDoc(sequelize.models.myModel, 'Param');
console.log(object);

/*
 *create all definitions for object
 */
docs = docgen(sequelize).defineAll(sequelize.models.myModel, 'Param');
console.log(docs.toString());

```

See examples of generated documents [here](test/samples).

See more details in the [test cases](test/lib-test.js).

# contributing

Pull requests are welcome. Just make sure all eslint rules pass and the tests
pass, and that the coverage is high enough. You can check that with:

```
npm run lint
npm test
npm run coverage
```

# license

MIT

