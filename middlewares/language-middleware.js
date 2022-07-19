function languageMiddleware(req, res, next) {

    const language = req.headers["accept-language"]
    const a = req.is('application/json')
    console.log('a: ', a);
    console.log('language: ', language);

    next()
}

module.exports = languageMiddleware;