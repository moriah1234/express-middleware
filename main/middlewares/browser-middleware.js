function browserMiddleware(req, res, next) {
    const userAgent = req.get('User-Agent');
    const isChromeUser = userAgent.includes('Chrome')
    if (isChromeUser && req.originalUrl !== '/error') {
        res.redirect('/error');
    }
    next();
}

module.exports = browserMiddleware;