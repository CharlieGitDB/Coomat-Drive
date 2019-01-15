const express = require('express')
const router = express.Router()
const { SessionChecker } = require('../providers/SessionUtil')
const User = require('../models/User')
const Response = require('../models/Response')

/* GET users listing. */
router.get('/:username', SessionChecker, (req, res) => {
  User.findOne({where: {username: req.params.username}})
    .then(user => {
      if (!user) {
        res.send(new Response(null, 'User not found', false))
      } else {
        res.send(new Response(user, 'User returned', true))
      }
    })
    .catch(err => res.send(new Response(null, err, false)))
})

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({where: {username: username}})
    .then(user => {
      if (!user) {
        res.send(new Response(null, 'User not found', false))
      } else if (!user.validPassword(password)) {
        res.send(new Response(null, 'Incorrect password', false))
      } else {
        req.session.user = user.dataValues
        res.send(new Response(user, 'Logged In successfully', true))
      }
    })
})

router.post('/register', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(user => {
    req.session.user = user.dataValues
    res.send(new Response(user, 'User created successfully', true))
  })
  .catch(err => {
    res.send(new Response(null, err.errors, false))
  })
})

module.exports = router