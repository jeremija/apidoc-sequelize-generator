# apidoc-sequelize-generator

[![Build Status](https://travis-ci.org/jeremija/apidoc-sequelize-generator.svg?branch=master)](https://travis-ci.org/jeremija/apidoc-sequelize-generator)

Automatically generate definitions for [apidoc](http://apidocjs.com/) from
sequelize models.

# installation

```bash
npm install apidoc-sequelize-generator
```

# usage

```javascript
var docgen = require('apidoc-sequelize-generator');
var sequelize = require('./path/to/my/sequelize/instance.js');

/*
 * automatically generate documentation for all model definitions
 */
var docs = docgen(sequelize).auto();
console.log(docs);

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
console.log(docs);


/*
 * add custom samples for certain type definitions
 */
docs = docgen(sequelize, {
  DATE: '2015-12-31 23:59:59'
}).auto();
console.log(docs)


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
object = docgen(sequelize).defineAll(sequelize.models.myModel, 'Param');
console.log(object);

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

