const express = require('express')
const router = express.Router();

const getMiddleware = require("../../middle-ground/getMiddleware");
const postMiddleware = require("../../middle-ground/postMiddleware")

const fs = require("fs");

let jsonData = fs.readFileSync("../middle-ground/info.json");

router.get('/', getMiddleware, (req, res) => {
    jsonData = req.jsonData;
    res.send(`
    <body style="background-color:aquamarine;">
        <h1>
            comments::::
        </h1>
    
        <ul>
    ${jsonData.map(i => `<li>${i.port} says :   
    ${i.comment}
  </li> `)}
  </ul>
    
        <form action="/comment" method="post">
            <input name="comment" type="text" />
            <input title="submit" type="submit" />
        </form>
    </body>`)
})


router.post("/", postMiddleware, (req, res) => {
    res.redirect("/comment")
  })
  

module.exports = router;