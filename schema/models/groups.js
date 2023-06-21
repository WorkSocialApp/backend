const { Sequelize } = require('sequelize');


let Group = sequelize.define('group', {
    title: Sequelize.STRING,
    members: Sequelize.STRING,
    count: Sequelize.INTEGER,


});

module.exports = {
 Group
}