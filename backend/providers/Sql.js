const Sequelize = require('sequelize')
const STATIC_VARS = require('../utils/StaticVariables')

const sqlize = new Sequelize(STATIC_VARS.dburl)

sqlize.query('CREATE DATABASE IF NOT EXISTS coomatdrive;').catch(err => process.exit(0))

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