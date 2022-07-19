const express = require('express');
const app = express();

const fs = require("fs");

const bodyParser = require('body-parser');

const getMiddleware = require("../middle-ground/getMiddleware");
const postMiddleware = require("../middle-ground/postMiddleware")

const port = 8001;

let jsonData = fs.readFileSync("/home/tehilla/Thursday/express-middleware/ports-exercise/middle-ground/info.json");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: true }));


app.get("/", getMiddleware, (req, res) => {
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

app.post("/comment", postMiddleware, (req, res) => {
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})