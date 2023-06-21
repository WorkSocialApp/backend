const {Sequelize} = require('sequelize');

let Event = sequelize.define('event', {
    name: Sequelize.STRING,
    date: Sequelize.DATE,
    time: Sequelize.TIME,
    description: Sequelize.STRING,
    guests: Sequelize.STRING

});

module.exports = {
    Event
}