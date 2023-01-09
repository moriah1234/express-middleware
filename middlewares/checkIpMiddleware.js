function checkIpMiddleware(req, res, next) {

    if (req.connection.remoteAddress !== '::1' && req.originalUrl !== '/error') {

        res.locals.isBlocked = true;
        console.log('ip bad');
    } else {
        console.log('ip good');

        res.locals.isBlocked = false;
    };

    next()
};
module.exports = checkIpMiddleware;