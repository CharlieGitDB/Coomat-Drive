const Response = require('../models/Response')

const AuthUtil = {
    checkAuth: (req, res, next) => {
        if (req.session.user && req.cookies.user_sid) {
            next()
        } else {
            returnError(res)
        }
    },
    checkAdminAuth: (req, res, next) => {
        if (req.session.user && req.cookies.user_sid && req.session.user.isAdmin) {
            next()
        } else {
            returnError(res)
        }
    }
}

const returnError = (res) => {
    res.status(500)
    res.send(new Response({authorized: false}, 'User is not authorized', false))
}


module.exports = AuthUtil