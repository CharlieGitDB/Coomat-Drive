const express = require('express') 
const router = express.Router()
const SessionUtil = require('../utils/SessionUtil')

/* GET home page. */
router.get('/', SessionUtil.sessionChecker, (req, res, next) => {
  res.send('home page')
})

module.exports = router 
