const express = require('express') 
const router = express.Router()
const { SessionChecker } = require('../providers/SessionUtil')

/* GET home page. */
router.get('/', SessionChecker, (req, res, next) => {
  res.send('home page') 
}) 

module.exports = router 
