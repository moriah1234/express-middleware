const fs = require('fs');

function postMiddleware(req, res, next) {


    const port = req.headers.host.split(":")[1];
    const comment = req.body.comment;
    if (!comment) return next()
    const obj = {};
    obj.comment = comment;
    obj.port = port;

    const jsonFile = fs.readFileSync("../middle-ground/info.json");
    const parsed = JSON.parse(jsonFile);
    parsed.unshift(obj);
    const newInfo = JSON.stringify(parsed);
    fs.writeFileSync("../middle-ground/info.json", newInfo)

    next();
}

module.exports = postMiddleware;