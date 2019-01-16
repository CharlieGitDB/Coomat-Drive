const express = require('express')
const router = express.Router()
const AuthUtil = require('../utils/AuthUtil')
const User = require('../models/User')
const SafeUser = require('../models/SafeUser')
const Response = require('../models/Response')

router.use(AuthUtil.checkAdminAuth)

router.get('/find/:username', (req, res) => {
    User.findOne({ where: { username: req.params.username } })
        .then(user => {
            if (!user) {
                res.send(new Response(null, 'User not found', false))
            } else {
                res.send(new Response(new SafeUser(user), 'User returned', true))
            }
        })
        .catch(err => res.send(new Response(null, err, false)))
})

router.delete('/delete/:username', (req, res) => {
    User.destroy({ where: { username: req.params.username } })
        .then(res => res.send(new Response(null, 'User deleted', true)))
        .catch(err => res.send(new Response(null, err, false)))
})

module.exports = router