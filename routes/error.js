const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`   <style>
    :root {
        --height: 45vh;
        --width: 40vw;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #000;
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
    }

    body {
        background-color: #fff;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;

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
        color: #f00;
        font-size: 1.5em;
        margin-bottom: 1vh;
    }
    .back-button{
        align-self: center;
        padding-bottom: 3vh;
    }
    
</style>

<body>
 
<img src="/wallpaper.jpg" />
<div class="container-wrapper-a">
<div class="container-wrapper-b">
    <div class="container">
        <div class="topbar">
            <h1>Critical Error</h1>
            <div class="f-close-wrapper">
                <div class="f-close">x</div>
            </div>
        </div>
        <div class="s-container">
            <div class="info">
                <h2 class="text-bold">You are not allowed here. </h2>
                   <h2> However, you can make this page available to you! <br />
                    You have the power to comment just one line in index.js to fix that.</h2>
            </div>
        </div>
        <a 
        class="back-button"
        href="/">try again</a>
    </div>
</div>
</div>
</body>`)
})


router.get('/ofdata', (req, res) => {
    res.send(`   <style>
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
        background-color: #fff;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;

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
        color: #f00;
        font-size: 1.5em;
        margin-bottom: 1vh;
    }
</style>

<body>
 
<img src="/wallpaper.jpg" />
<div class="container-wrapper-a">
<div class="container-wrapper-b">
    <div class="container">
        <div class="topbar">
            <h1>Critical Error</h1>
            <div class="f-close-wrapper">
                <div class="f-close"><a href="/enter">x</a></div>
            </div>
        </div>
        <div class="s-container">
            <div class="info">
                <h2 class="text-bold">Wrong data. </h2>
            </div>
        </div>
    </div>
</div>
</div>
</body>`)
})

module.exports = router;