const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

let Groups = sequelize.define('groups', {
    title: DataTypes.STRING,
    members: DataTypes.STRING,
    count: DataTypes.INTEGER,
});

module.exports = {
 Groups
}