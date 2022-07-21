function enterMiddleware(req, res, next) {
    if (req.method === 'POST') {
        const obj = {};

        const userData = req.body;
        if (Object.keys(userData).length === 0) return next();

        if (userData.username.length === 0) {
            obj.username = false
        } else {
            obj.username = true
        }
        if (userData.password.length < 8) {
            obj.password = false
        } else {
            obj.password = true;
        }
        if (userData.captchaval !== userData.captcha) {
            obj.captcha = false
        } else {
            obj.captcha = true
        };

        if (obj.captcha && obj.password && obj.username) return next();

        else res.redirect("/error/ofdata")
    } else {
        next()
    }
}

module.exports = enterMiddleware;