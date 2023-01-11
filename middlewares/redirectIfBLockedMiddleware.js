function redirectIfBlockedMiddleware(req, res, next) {

    if (res.locals.isBlocked) {
        res.redirect('/error')
    }
    else {
        next();
    };

};
module.exports = redirectIfBlockedMiddleware;