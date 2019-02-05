const Sequelize = require('sequelize')
const STATIC_VARS = require('../models/StaticVariables')

const sqlize = new Sequelize(STATIC_VARS.dburl)

sqlize.query('CREATE DATABASE IF NOT EXISTS coomatdrive;').catch(err => {
    console.error('MySql server is most likely not started, exiting..')
    process.exit(0)
})

//add sequelize to the new object to use the object type variables
sqlize.seq = Sequelize

module.exports = sqlize

// sqlize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });