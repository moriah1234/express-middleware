
const fs = require('fs');
const fout = fs.createWriteStream('user-data-get.txt', 'utf-8');

function userDataMiddleware(req, res, next) {

    const data = {
        date: new Date(),
        remoteAdress: req.connection.remoteAddress,
        url: req.originalUrl,
        method: req.method,
        body: req.body,
        userAgent: req.get('User-Agent'),
    };

    fout.write(JSON.stringify(data).concat('\n'));
    next()
};
module.exports = userDataMiddleware;