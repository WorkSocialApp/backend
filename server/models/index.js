const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')
const { Groups } = require('./groups')
const { Users } = require('./users')
const { Events } = require('./events')

Users.belongsToMany(Groups, { through: 'user_groups' })
Groups.belongsToMany(Users, { through: 'user_groups' })

Users.belongsToMany(Events, { through: 'user_events' })
Events.belongsToMany(Users, { through: 'user_events' })

module.exports = {
    db: sequelize,
}
