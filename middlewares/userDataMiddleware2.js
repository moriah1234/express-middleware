
const writeToLogFile = require('../functions/writeToLogFile');

function userDataMiddleware2(req, res, next) {

    const data = {
        date: new Date(),
        remoteAdress: req.connection.remoteAddress,
        url: req.originalUrl,
        method: req.method,
        body: req.body,
        userAgent: req.get('User-Agent'),
        login: res.locals.isBlocked ? "BLOCKED" : "ALLOWED"
    };

    writeToLogFile(data);

    next();
};

module.exports = userDataMiddleware2;