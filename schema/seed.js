const { groups, users, events } = require('./seedData.js')

const { sequelize } = require('./db')

const { Groups } = require('./models/groups') //imported group model
const { Users } = require('./models/users') //imported user model
const { Events } = require('./models/events') //imported events model

const seed = async () => {
    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true })

        // insert data
        await Promise.all(users.map((users) => Users.create(users)))
        await Promise.all(groups.map((groups) => Groups.create(groups)))
        await Promise.all(events.map((events) => Events.create(events)))

        console.log('db populated!')
    } catch (error) {
        console.error(error)
    }
}

seed()