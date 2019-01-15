const Sql = require('../providers/Sql')
const bcrypt = require('bcrypt')

// setup User model and its fields.
const User = Sql.define('users', {
    username: {
        type: Sql.seq.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sql.seq.STRING,
        allowNull: false
    }
}, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }   
})

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

// create all the defined tables in the specified database.
Sql.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error))

// export User model for use in other files.
module.exports = User