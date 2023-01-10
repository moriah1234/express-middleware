
function validate(string) {

    //contains at least one number, one upper case character,
    //one lower case character, and one special character 
    //at least 8 characters long
    const strongRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    
    //contains only numbers or only upper case characters or only numbers
    const weakRegex = /^[a-z]{1,}$|^[A-Z]{1,}$|^[0-9]{1,}$/

    if (string.match(strongRegex)) return "strong";

    if (string.match(weakRegex) || string.length < 5) return "weak"

    return "medium";

}


function passwordRankingMiddleware(req, res, next) {
    res.locals.passwordRank = validate(req.body.password);
    next()
}

module.exports = passwordRankingMiddleware;