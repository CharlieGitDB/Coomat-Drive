const STATIC_VARS = require('../models/StaticVariables')
const bcrypt = require('bcrypt')

const EncryptUtil = {
    validKey(key) {
        return bcrypt.compareSync(key, STATIC_VARS.keyHash)
    }
}

module.exports = EncryptUtil