const Response = require('../models/Response')

const ErrorUtil = {
    createError(res, msg, data) {
        res.status(500)
        res.send(new Response(data, msg, false))
    }
}

module.exports = ErrorUtil