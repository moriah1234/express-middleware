function validationMiddleware(req, res, next) {

    if (
        req.body.username &&
        typeof req.body.username === 'string' &&
        req.body.password &&
        typeof req.body.password === 'string' &&
        req.body.mail &&
        typeof req.body.mail === 'string' &&
        req.body.mail.includes('@') &&
        !isNaN(Number(req.body.phonenumber)) &&
        req.body.phonenumber.length === 10 &&
        !res.locals.isBlocked //to check that the user was not already denied (by ip)
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