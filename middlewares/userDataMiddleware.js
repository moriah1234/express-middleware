const writeToLogFile = require('../functions/writeToLogFile');

function userDataMiddleware(req, res, next) {

    const data = {
        date: new Date(),
        remoteAdress: req.connection.remoteAddress,
        url: req.originalUrl,
        method: req.method,
        body: req.body,
        userAgent: req.get('User-Agent'),
    };

    writeToLogFile(data);

    next()
};

module.exports = userDataMiddleware;