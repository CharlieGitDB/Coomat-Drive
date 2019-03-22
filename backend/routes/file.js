const express = require('express')
const router = express.Router()
const AuthUtil = require('../utils/AuthUtil')
const Response = require('../models/Response')
const FSUtils = require('../utils/FileSystemUtil')

/* GET home page. */
router.get('/', AuthUtil.checkAuth, (req, res, next) => {    
    FSUtils.readUserFiles('t6')
        .then(files => res.send(new Response(files, 'Files returned', true)))
        .catch(err => console.log(err))
})

module.exports = router 
