// Mission number #2 - track usage of the site

function TrackUserMiddleware(req, res, next) {

    const data = {};

    data.timeStamp = new Date();
    data.userAgent = req.get('User-Agent');
    data.remoteIp = req.connection.remoteAddress;
    data.url = req.originalUrl;

    console.log('data: ', data);

    next();
}
module.exports = TrackUserMiddleware;
