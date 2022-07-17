
function enterMiddleware(req, res, next) {
    const userData = req.body;
    console.log('userData: ', userData);
    next();
}

module.exports = enterMiddleware;