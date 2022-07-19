function languageMiddleware(req, res, next) {

    const language = req.headers["accept-language"]
    console.log('language: ', language);

    next()
}

module.exports = languageMiddleware;