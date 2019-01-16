const express = require('express')
const router = express.Router()
const AuthUtil = require('../utils/AuthUtil')

/* GET home page. */
router.get('/', AuthUtil.checkAuth, (req, res, next) => {
    res.send('home page')
})

module.exports = router 
