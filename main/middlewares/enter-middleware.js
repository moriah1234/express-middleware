
function enterMiddleware(req, res, next) {
    if (req.method === 'POST') {
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

        console.log('obj.age && obj.password && obj.username: ', obj.age && obj.password && obj.username);
        if (obj.age && obj.password && obj.username) return next();

        else res.redirect("/error/ofdata")

        // const obj = {};

        // const userData = req.body;

        // if (Object.keys(userData).length === 0) return next();

        // if (userData.username?.length === 0) {
        //     obj.username = false
        // } else {
        //     obj.username = true
    }
    else {
        next()
    }
}

module.exports = enterMiddleware;