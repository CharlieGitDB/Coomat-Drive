const express = require('express') 
const router = express.Router()
const { SessionChecker } = require('../providers/SessionUtil')
const Response = require('../models/Response')

/* GET home page. */
router.get('/', SessionChecker, (req, res, next) => {
  res.send(new Response(null, 'Hello', true))
})

module.exports = router 
