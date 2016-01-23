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
    sequelize.import(path.join(__dirname, 'models', file))
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
  it('should recreate an object tree sequelize model', function() {

  });

  it('should recreate an object with only specified includes', function() {

  });

  it('should prevent cyclic loops', function() {

  });
});

describe('defineDoc()', function() {
  it('should create @apiDefine with @apiParams', function() {
    var doc = lib.defineDoc(sequelize.models.parent, 'Param');
    expect(doc).to.equal(
      "/**\n" +
      " * @apiDefine parentParam\n" +
      " * @apiParam {bigint} id\n" +
      " * @apiParam {uuid} uuid\n" +
      " * @apiParam {string} name\n" +
      " * @apiParam {integer} [count]\n" +
      " * @apiParam {enum} category\n" +
      " * @apiParam {date} birthday\n" +
      " * @apiParam {date} createdAt\n" +
      " * @apiParam {date} updatedAt\n" +
      " * @apiParam {bigint} [parentDetailsId]\n" +
      " * @apiParam {parentDetails} [parentDetail]\n" +
      " * @apiParam {child[]} children\n" +
      " */\n" +
      "\n"
    );
  });
});

describe('defineExample()', function() {
});

describe('defineExamples()', function() {

});

describe('auto()', function() {

});
