// Mission number 2 - track usage of the site
const fs = require('fs')
const fout = fs.createWriteStream('users-data.txt', 'utf-8');

function trackUsersMiddleware(req, res, next) {
    const data = {};

    data.timeStamp = new Date();
    data.userAgent = req.get('User-Agent');
    data.remoteIp = req.connection.remoteAddress;
    data.url = req.originalUrl;

    fout.write(JSON.stringify(data).concat('\n'));
    next();
}

module.exports = trackUsersMiddleware;