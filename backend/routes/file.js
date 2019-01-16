const express = require('express')
const router = express.Router()
const AuthUtil = require('../utils/AuthUtil')
const Response = require('../models/Response')

/* GET home page. */
router.get('/', AuthUtil.checkAuth, (req, res, next) => {
    res.send(new Response(null, 'Hello', true))
})

module.exports = router 
