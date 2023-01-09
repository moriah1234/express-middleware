function redirectIfBlockedMiddleware(req, res, next) {

    console.log('res.locals.isBlocked: ', res.locals.isBlocked);
    if (res.locals.isBlocked) {
        res.redirect('/error')
    }
    else {
        next();
    };

};
module.exports = redirectIfBlockedMiddleware;