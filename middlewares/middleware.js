function middleware(req, res, next) {
    if ((req.connection.remoteAddress === '::1' || req.connection.remoteAddress === '127.0.0.1') && req.originalUrl !== '/error') {
        res.redirect('/error');
    } else {
        next();
    }
}

module.exports = middleware;