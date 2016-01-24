'use strict';
var Sequelize = require('sequelize');
var expect = require('chai').expect;
var fs = require('fs');
var lib = require('../lib.js');
var path = require('path');

function createSequelize() {
  var sequelize = new Sequelize('sqlite://');

  fs.readdirSync(path.join(__dirname, 'models'))
  .filter(function(file) { return file.endsWith('.js'); })
  .forEach(function(file) {
    sequelize.import(path.join(__dirname, 'models', file));
  });

  var parent = sequelize.models.parent;
  var parentDetails = sequelize.models.parentDetails;
  var child = sequelize.models.child;
  var grandchild = sequelize.models.grandchild;

  parent.hasOne(parentDetails);
  parent.hasMany(child);
  child.hasMany(grandchild);

  grandchild.belongsTo(parent);

  return sequelize;
}

var sequelize;
beforeEach(function() {
  sequelize = createSequelize();
});

describe('createObject()', function() {
  it('should recreate an object tree from sequelize model', function() {
    var obj = lib(sequelize).createObject(sequelize.models.parent);

    expect(obj).to.eql({
      id: 1,
      uuid: '413e8630-c16c-11e5-b8c9-9b7d37852114',
      name: 'string',
      count: 1,
      category: 'CAT1 | CAT2',
      birthday: '2015-12-31T23:59:59.123',
      createdAt: '2015-12-31T23:59:59.123',
      updatedAt: '2015-12-31T23:59:59.123',
      parentDetailsId: 1,
      children: [{
        id: 1,
        name: 'string',
        createdAt: '2015-12-31T23:59:59.123',
        updatedAt: '2015-12-31T23:59:59.123',
        parentId: 1,
        grandchildren: [{
          childId: 1,
          createdAt: '2015-12-31T23:59:59.123',
          grandParentId: 1,
          id: 1,
          name: 'string',
          parent: {}, // preventing cyclic loops
          parentId: 1,
          updatedAt: '2015-12-31T23:59:59.123'
        }]
      }],
      parentDetail: {
        id: 1,
        address: 'string',
        createdAt: '2015-12-31T23:59:59.123',
        updatedAt: '2015-12-31T23:59:59.123',
        parentId: 1
      }
    });
  });

  it('should recreate an object with only specified includes', function() {
    var obj = lib(sequelize).createObject(sequelize.models.parent, {
      ignoredFields: ['createdAt'],
      include: [{
        model: 'child'
      }, {
        model: 'parentDetails'
      }]
    });

    expect(obj).to.eql({
      id: 1,
      uuid: '413e8630-c16c-11e5-b8c9-9b7d37852114',
      name: 'string',
      count: 1,
      category: 'CAT1 | CAT2',
      birthday: '2015-12-31T23:59:59.123',
      updatedAt: '2015-12-31T23:59:59.123',
      parentDetailsId: 1,
      children: [{
        id: 1,
        name: 'string',
        updatedAt: '2015-12-31T23:59:59.123',
        parentId: 1
      }],
      parentDetail: {
        id: 1,
        address: 'string',
        updatedAt: '2015-12-31T23:59:59.123',
        parentId: 1
      }
    });
  });

  it('should recreate an object with only specified includes', function() {
    var obj = lib(sequelize).createObject(sequelize.models.parent, {
      ignoredFields: ['createdAt', 'updatedAt'],
      include: [{
        model: 'child',
        include: [{
          model: 'grandchild'
        }]
      }]
    });

    expect(obj).to.eql({
      id: 1,
      uuid: '413e8630-c16c-11e5-b8c9-9b7d37852114',
      name: 'string',
      count: 1,
      category: 'CAT1 | CAT2',
      birthday: '2015-12-31T23:59:59.123',
      parentDetailsId: 1,
      children: [{
        id: 1,
        name: 'string',
        parentId: 1,
        grandchildren: [{
          childId: 1,
          grandParentId: 1,
          id: 1,
          name: 'string',
          parentId: 1,
        }]
      }],
    });
  });

});

describe('defineDoc()', function() {
  it('should create @apiDefine with @apiParams', function() {
    var doc = lib(sequelize).defineDoc(sequelize.models.parent, 'Param');
    expect(doc).to.equal(
      '/**\n' +
      ' * @apiDefine parentParam\n' +
      ' * @apiParam {bigint} id\n' +
      ' * @apiParam {uuid} uuid\n' +
      ' * @apiParam {string} name\n' +
      ' * @apiParam {integer} [count]\n' +
      ' * @apiParam {enum} category\n' +
      ' * @apiParam {date} birthday\n' +
      ' * @apiParam {date} createdAt\n' +
      ' * @apiParam {date} updatedAt\n' +
      ' * @apiParam {bigint} [parentDetailsId]\n' +
      ' * @apiParam {parentDetails} [parentDetail]\n' +
      ' * @apiParam {child[]} children\n' +
      ' */\n'
    );
  });
});

describe('defineExample()', function() {
  it('should create @apiDefine with @apiSuccessExample', function() {
    var doc = lib(sequelize).defineExample('myObj', 'Response', {
      id: 1,
      name: 'string'
    });

    expect(doc).to.equal(
      '/**\n' +
      ' * @apiDefine myObjResponse\n' +
      ' * @apiSuccessExample {json} Response\n' +
      ' *     {\n' +
      ' *       "id": 1,\n' +
      ' *       "name": "string"\n' +
      ' *     }\n' +
      ' */\n'
    );
  });

  it('should create @apiDefine with an array', function() {
    var doc = lib(sequelize).defineExample('myObj', 'Request', {
      id: 1,
      name: 'string'
    }, true);

    expect(doc).to.equal(
      '/**\n' +
      ' * @apiDefine myObjArrayRequest\n' +
      ' * @apiParamExample {json} Request\n' +
      ' *     [\n' +
      ' *       {\n' +
      ' *         "id": 1,\n' +
      ' *         "name": "string"\n' +
      ' *       }\n' +
      ' *     ]\n' +
      ' */\n'
    );
  });
});

function read(file) {
  var filename = path.join(__dirname, file);
  return fs.readFileSync(filename, 'utf8');
}
describe('defineAll()', function() {
  it('should define all types of exampels for a specific model', function() {
    var examples = lib(sequelize).defineAll(sequelize.models.parent);

    var param = read('samples/param.js');
    var request = read('samples/request.js');
    var requestArray = read('samples/requestArray.js');
    var success = read('samples/success.js');
    var successArray = read('samples/successArray.js');

    expect(examples.param).to.equal(param);
    expect(examples.request).to.equal(request);
    expect(examples.requestArray).to.equal(requestArray);
    expect(examples.success).to.equal(success);
    expect(examples.successArray).to.equal(successArray);

    expect(examples.toString()).to.be.a('string');
  });
});

describe('auto()', function() {
  it('should automatically generate docs for all models', function() {
    var docs = lib(sequelize).auto();
    expect(docs.toString()).to.equal(read('samples/auto.js'));
  });
  it('should respect includes', function() {
    var docs = lib(sequelize).auto({
      parent: {
        include: [{
          model: 'parentDetails'
        }]
      }
    });
    expect(docs.toString()).to.equal(read('samples/autoWithOptions.js'));
  });
});
