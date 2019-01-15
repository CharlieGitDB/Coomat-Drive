const express = require('express') 
const router = express.Router()
const SessionUtil = require('../utils/SessionUtil')
const Response = require('../models/Response')

/* GET home page. */
router.get('/', SessionUtil.sessionChecker, (req, res, next) => {
  res.send(new Response(null, 'Hello', true))
})

module.exports = router 
