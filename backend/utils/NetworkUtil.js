const NetworkUtil = {
    isLocalHost(req) {
        let ip = req.connection.remoteAddress

        return ip === '127.0.0.1' || ip === '::ffff:127.0.0.1'
    }
}

module.exports = NetworkUtil