
const express = require('express')
const router = express.Router();

const fs = require("fs")

const getMiddleware = require("../../ports-exercise/middle-ground/getMiddleware")
const postMiddleware = require("../../ports-exercise/middle-ground/postMiddleware")

let jsonData = fs.readFileSync("/home/dina/thursday-practice/express-middleware/ports-exercise/middle-ground/info.json")

router.get("/", getMiddleware, (req, res) => {
    jsonData = req.jsonData;
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
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
      </body>
      </html>
  `)
})

router.post("/", postMiddleware, (req, res) => {
    res.redirect("/comment")
})

module.exports = router;
