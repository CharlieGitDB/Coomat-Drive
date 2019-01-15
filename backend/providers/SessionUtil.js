const SessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        next()
    } else {
        res.status(500)
        res.send({authorized: false})
    }
}


module.exports = {
    SessionChecker: SessionChecker
}