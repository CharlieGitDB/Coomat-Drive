const Sql = require('../providers/Sql')
const Guid = require('guid')

const AppConfig = Sql.define('appconfig', {
    name: {
        type: Sql.seq.STRING,
        unique: true,
        allowNull: false
    },
    value: {
        type: Sql.seq.STRING,
        allowNull: false
    }
})

// create all the defined tables in the specified database.
Sql.sync()
    .then(() => console.log('appconfig table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error))

AppConfig.initKey = function() {
    AppConfig.findAll({
        where: {
            name: 'key'
        }
    }).then(data => {
        if (data.length === 0) {
            AppConfig.create({
                name: 'key',
                value: Guid.raw()
            })
        }
    })
}

console.log(AppConfig, 'APCONFIG?')

module.exports = AppConfig