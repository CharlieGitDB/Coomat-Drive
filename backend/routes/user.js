const express = require('express')
const router = express.Router()
const AuthUtil = require('../utils/AuthUtil')
const EncryptUtil = require('../utils/EncrpytUtil')
const ErrorUtil = require('../utils/ErrorUtil')
const User = require('../models/User')
const SafeUser = require('../models/SafeUser')
const Response = require('../models/Response')

router.get('/auth', AuthUtil.checkAuth, (req, res) => {
    res.send(new Response({ authorized: true }, 'User is authorized', true))
})

router.get('/', AuthUtil.checkAuth, (req, res) => {
    User.findOne({ where: { username: req.session.user.username } })
        .then(user => {
            if (!user) {
                ErrorUtil.createError(res, 'User not found')
            } else {
                res.send(new Response(new SafeUser(user), 'User returned', true))
            }
        })
        .catch(err => res.send(new Response(null, err, false)))
})

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({ where: { username: username } })
        .then(user => {
            if (!user || !user.validPassword(password)) {
                ErrorUtil.createError(res, 'Failed to login')
            } else {
                req.session.user = user.dataValues
                res.send(new Response(new SafeUser(user), 'Logged In successfully', true))
            }
        })
})

router.post('/register', (req, res) => {
    if (req.body.secretKey && EncryptUtil.validKey(req.body.secretKey)) {
        User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(user => {
            req.session.user = user.dataValues
            res.send(new Response(new SafeUser(user), 'User created successfully', true))
        })
        .catch(err => {
            ErrorUtil.createError(res, 'An error has occured', err.errors)
        })
    } else {
        ErrorUtil.createError(res, 'Incorrect secret key')
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('user_sid')
    res.send(new Response(null, 'User logged out', true))
})

module.exports = router