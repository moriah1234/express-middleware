function enterMiddleware(req, res, next) {
    if (req.method !== 'POST') return next() //when first entering to the page and there is still no data

    const userData = req.body;

    if (
        userData.username.length >= 2 &&
        userData.password.length >= 8 &&
        userData.captcha === userData.captchaVal
    ) {
        return next();
    } else res.redirect('/error/ofdata');
}

module.exports = enterMiddleware;