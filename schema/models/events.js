const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

let Events = sequelize.define("event", {
  name: DataTypes.STRING,
  date: DataTypes.DATE,
  time: DataTypes.TIME,
  description: DataTypes.STRING,
  guests: DataTypes.STRING,
});

module.exports = {
  Events,
};
