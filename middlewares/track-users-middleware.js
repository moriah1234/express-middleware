
const fs = require('fs')

function trackUsersMiddleware(req, res, next) {
    const data = { }

    data.firstTimeStamp = new Date();
    data.userAgent = req.get('User-Agent');
    data.remoteIp = req.connection.remoteAddress;

    next();
}

module.exports = trackUsersMiddleware;