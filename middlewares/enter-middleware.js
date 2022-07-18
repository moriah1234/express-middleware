
function enterMiddleware(req, res, next) {

    const obj = {};

    const userData = req.body;
    console.log('userData: ', userData);
    console.log(' isNaN(userData.age): ', isNaN(userData.age));
    if (Object.keys(userData).length === 0) return next();

    if (userData.username?.length === 0) {
        obj.username = false
    } else {
        obj.username = true
    }
    if (userData.password?.length < 8) {
        obj.password = false
    } else {
        obj.password = true;
    }
    if (userData.age > 50 || userData.age < 10 || isNaN(userData.age)) {
        obj.age = false
    } else {
        obj.age = true
    };

    if (obj.age && obj.password && obj.username) return next();

    else res.redirect("/error")


}

module.exports = enterMiddleware;