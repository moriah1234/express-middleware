
const express = require('express')
const router = express.Router();
const fs = require('fs')
router.get('/', (req, res) => {

    res.send(`<style>
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
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
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

    .container-wrapper-a {
        height: var(--height) + 1.5vh;
        width:  var(--width) + 1.5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border: #bfbfbf 2px solid;
        border-right-color: #333;
        border-bottom-color: #333;
    }

    .container-wrapper-b {
        height: var(--height) + 1vh;
        width: var(--width) + 1vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #bfbfbf;
        border: #fff 2px solid;
        border-right-color: #555;
        border-bottom-color: #555;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 0px  4px #000;
    }

    .container {
        background-color: #bfbfbf;
        height:var(--height);
        width:var(--width);
        display: flex;
        flex-direction: column;
    }

    .topbar {
        background-image: linear-gradient(to right, #1c3070, #3b5490, #5b7ab0, #7fa1d0, #a7c9ef);
        height: 8vh;
        width:var(--width);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 2vw;
        padding-right: 2vw;
    }

    h1 {
        color: #bfbfbf;
        font-size: 1.2em;
        text-shadow: 1px 1px #000;

    }

    .s-container {
        height: 82vh;
        width: var(--width);
    }

    .info {
        height: 32vh;
        width: var(--width);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 1vw;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100vh;
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

    .f-close {
        width: 3vh;
        height: 3vh;
        background-color: #bfbfbf;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        border: #fff solid 2px;
        border-right-color: #747171;
        border-bottom-color: #747171;
        font-size: 1em;
        text-align: center;
        padding-bottom: .2vh;
    }

    .f-close-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.2vh;
        height: 3.2vh;
        background-color: #333;
        border: #bfbfbf solid 1px;
        border-right-color: #333;
        border-bottom-color: #333;
        margin-left: 10vw;
    }

    .text-bold {
        color: #00f;
        font-size: 1.5em;
        margin-bottom: 1vh;
    }

    ::-moz-selection {
        color: #000;
        background: #fff;
    }

    ::selection {
        color: #000;
        background: #fff;
    }

    .topbar-b {
        background-image: linear-gradient(to right, #1c3070, #3b5490, #5b7ab0, #7fa1d0, #a7c9ef);
        height: 4vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 2vw;
        padding-right: 2vw;
        color:#fff;
        align-self: flex-start;
        margin-bottom: 1vh;
        width: 30vw;
    }

    .topred {
        background-image: linear-gradient(to right, #370505, #652f30, #965a5a, #ca8888, #ffb9b9);
    }

    .info-b {
        width: 30vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #bfbfbf;
        border: 1px solid #fff;
        border-right-color: #333;
        border-bottom-color: #333;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 30vh;
    }

    .wrapper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .border-b {
        border: solid 2px #bfbfbf;
        border-bottom-color: #000;
        border-right-color: #000;
        margin: 1vh;
    }
</style>

<body>
 
<img src="/wallpaper.jpg" />

<div class="container-wrapper-a">
<div class="container-wrapper-b">
    <div class="container">
        <div class="topbar">
            <h1>New Message</h1>
            <div class="f-close-wrapper">
                <div class="f-close">x</div>
            </div>
        </div>
        <div class="s-container">
            <div class="info">
                <h2 class="text-bold">You are in. </h2>
                   <h2> Your next mission will arive soon...</h2>
            </div>
        </div>
    </div>
</div>
</div>
<script>
    const data = "If you want to become one of us, create a file and write to it all the users data: their ip, user agent(browser and more),  the route they are in,   and the time they entered the site."

    const blob = new Blob([data], { type: "octet-stream" });

    const href = URL.createObjectURL(blob)

    const a = Object.assign(document.createElement("a"), {
        href, style: "display:none",
        download: "not-a-virus.txt"
    })

    document.body.appendChild(a)

    a.click();
    URL.revokeObjectURL(href)
    a.remove();
</script>
</body>`)
})

module.exports = router;
