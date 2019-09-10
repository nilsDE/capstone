'use strict';
module.exports = (sequelize, DataTypes) => {
  var Aphorism = sequelize.define('Aphorism', {
    body: DataTypes.STRING,
    author: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {});
  Aphorism.associate = function(models) {
    // associations can be defined here
  };
  return Aphorism;
};