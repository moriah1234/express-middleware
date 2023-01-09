function validationMiddleware(req, res, next) {

    if (
        typeof req.body.username === 'string' &&
        req.body.username &&
        typeof req.body.password === 'string' &&
        req.body.password &&
        typeof req.body.mail === 'string' &&
        req.body.mail &&
        req.body.mail.includes('@') &&
        !isNaN(Number(req.body.phonenumber)) &&
        req.body.phonenumber.length === 10 &&
        !res.locals.isBlocked //to check taht the user was not already denied (by ip)
    ) {
        console.log('validation good');
        res.locals.isBlocked = false;
    } else {
        console.log('validation bad');

        res.locals.isBlocked = true;
    };

    next();
};
module.exports = validationMiddleware;