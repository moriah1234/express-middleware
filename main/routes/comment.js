const express = require('express')
const router = express.Router();

const getMiddleware = require("../../middle-ground/getMiddleware");
const postMiddleware = require("../../middle-ground/postMiddleware")

const fs = require("fs");

let jsonData = fs.readFileSync("../middle-ground/info.json");

router.get('/', getMiddleware, (req, res) => {
    jsonData = req.jsonData;
    res.send(`

    <style>
    :root {
        --height: 40vh;
        --width: 40vw;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #000;
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
    }

    body {
        background-color: #00f;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;

    }

    ::-moz-selection {
        color: #000;
        background: #fff;
    }

    ::selection {
        color: #000;
        background: #fff;
    }

    .topbar {
        background-image: linear-gradient(to right, #1c3070, #3b5490, #5b7ab0, #7fa1d0, #a7c9ef);
        height: 4vh;
        width:var(--width);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 2vw;
        padding-right: 2vw;
        color:#fff;
        align-self: flex-start;
        margin-bottom: 1vh;
    }

    .topred {
        background-image: linear-gradient(to right, #370505, #652f30, #965a5a, #ca8888, #ffb9b9);
    }

    .info {
        width: var(--width);
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #bfbfbf;
        border: 1px solid #fff;
        border-right-color: #333;
        border-bottom-color: #333;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .wrapper {
        display: flex;
        align-items: center;
        flex-warp: wrap;
        width: 55vw;
        height: 80vh;
        flex-direction: column;
        overflow-y: scroll;
    }

    input[type='submit'] {
        width: 10vw;
        height: 5.8vh;
        display: flex;
        background-color: #bfbfbf;
        align-items: center;
        justify-content: center;
        border: solid #fff 2px;
        border-bottom-color: #333;
        border-right-color: #333;
        cursor: pointer;
    }

    input[type='submit']:focus {
        width: 10vw;
        height: 5.8vh;
        display: flex;
        background-color: #bfbfbf;
        align-items: center;
        justify-content: center;
        border: solid #333 2px;
        border-bottom-color: #eee;
        border-right-color: #eee;
    }

    .submit-wrapper {
        width: 10.2vw;
        height: 6vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        padding-bottom: .05vh;
        padding-right: .05vh;

    }

    form {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: var(--size);
        height: 50vh;
        background: #bfbfbf;
        width: 25vw;
        border: 1.5px solid #fff;
        border-right-color: #333;
        border-bottom-color: #333;
    }

    input[type='text'] {
        border: black solid 1.5px;
        border-bottom-color: #bcbcbc;
        border-right-color: #bcbcbc;
        height: 6vh;
        width: 17vw;
    }

    .input-wrapper {
        border: #747171 solid 1.5px;
        border-bottom-color: white;
        border-right-color: white;
    }

    .border {
        border: solid 2px #bfbfbf;
        border-bottom-color: #000;
        border-right-color: #000;
    }
    </style>
    <body>
    <div class="wrapper">
    ${jsonData.map(i => `<div class="border"><div class="info">${i.port == 8000 ? `<div class='topbar'>certeficated human</div>` : `<div class='topbar topred'>uncerteficated human</div>` }   
    ${i.comment}
  </div></div> `).join('</br>')}
</div>
<div class="border">
        <form action="/comment" method="post">
        <div class="input-wrapper">
            <input name="comment" type="text" />
            </div>
            <input title="submit" type="submit" />
        </form>
        </div>
    </body>`)
})


router.post("/", postMiddleware, (req, res) => {
    res.redirect("/comment")
})


module.exports = router;