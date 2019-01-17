const Response = require('../models/Response')
const ErrorUtil = require('../utils/ErrorUtil')

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
    },
    clearSessionIfNoUser: (req, res, next) => {
        if (req.cookies.user_sid && !req.session.user) {
            res.clearCookie('user_sid');
        }
        next()
    }
}

const returnError = (res) => ErrorUtil.createError(res, 'User is not authorized', {authorized: false})

module.exports = AuthUtil