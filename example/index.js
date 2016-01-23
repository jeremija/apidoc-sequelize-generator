'use strict';

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
