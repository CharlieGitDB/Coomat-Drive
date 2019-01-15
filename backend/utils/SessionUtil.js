const Response = require('../models/Response')

const SessionUtil = {
    sessionChecker: (req, res, next) => {
        if (req.session.user && req.cookies.user_sid) {
            next()
        } else {
            res.status(500)
            res.send(new Response({authorized: false}, 'User is not authorized', false))
        }
    }
}


module.exports = SessionUtil