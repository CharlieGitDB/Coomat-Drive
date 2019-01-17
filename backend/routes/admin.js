const express = require('express')
const router = express.Router()
const AuthUtil = require('../utils/AuthUtil')
const ErrorUtil = require('../utils/ErrorUtil')
const User = require('../models/User')
const SafeUser = require('../models/SafeUser')
const Response = require('../models/Response')

router.use(AuthUtil.checkAdminAuth)

router.get('/find/:username', (req, res) => {
    User.findOne({ where: { username: req.params.username } })
        .then(user => {
            if (!user) {
                ErrorUtil.createError(res, 'User not found')
            } else {
                res.send(new Response(new SafeUser(user), 'User returned', true))
            }
        })
        .catch(err => res.send(new Response(null, err, false)))
})

router.delete('/delete/:username', (req, res) => {
    User.destroy({ where: { username: req.params.username } })
        .then(user => {
            if (!user) {
                ErrorUtil.createError(res, 'User not found')
            } else {
                res.send(new Response(null, 'User deleted', true))
            }
        })
        .catch(err => ErrorUtil.createError(res, 'Unable to delete user'))
})

module.exports = router