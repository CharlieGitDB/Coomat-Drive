const STATIC_VARS = require('../models/StaticVariables')
const bcrypt = require('bcrypt')

const EncryptUil = {
    validateKey: (key) => {
        return bcrypt.compareSync(key, STATIC_VARS.keyHash)
    }
}

module.exports = EncryptUtil