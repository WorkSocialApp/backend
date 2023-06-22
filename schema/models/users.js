const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

let Users = sequelize.define('users', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING
});

module.exports = {
 Users
}