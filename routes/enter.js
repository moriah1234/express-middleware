const express = require('express')
const router = express.Router();

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%^&*!@()';
const randomString = () => {
    let result = ""
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

router.get('/', (req, res) => {

    res.send(` <style>
    :root {
        --size: 90vh;
        --cSize: 50vh;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #000;
        font-size: 20px;
        font-family: 'Quattrocento Sans', sans-serif;
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
        height: var(--size) + 1.5vh;
        width: var(--size) + 1.5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border: #bfbfbf 2px solid;
        border-right-color: #333;
        border-bottom-color: #333;
    }

    .container-wrapper-b {
        height: var(--size) + 1vh;
        width: var(--size) + 1vh;
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
        height: var(--size);
        width: var(--size);
        display: flex;
        flex-direction: column;
    }

    .topbar {
        background-image: linear-gradient(to right, #1c3070, #3b5490, #5b7ab0, #7fa1d0, #a7c9ef);
        height: 8vh;
        width: var(--size);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 3vw;
    }

    h1 {
        color: #fff;
        font-size: 1.2em;
    }

    .s-container {
        height: 82vh;
        width: var(--size);
    }

    .info {
        height: 32vh;
        width: var(--size);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: var(--size);
        height: 50vh;
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
        width: 5vh;
        height: 5vh;
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
        width: 5.2vh;
        height: 5.2vh;
        background-color: #333;
        border: #bfbfbf solid 1px;
        border-right-color: #333;
        border-bottom-color: #333;
        margin-left: 17vw;
    }
</style>

<body>
<img src="./wallpaper.jpg" />
<div class="container-wrapper-a">
    <div class="container-wrapper-b">
        <div class="container">
            <div class="topbar">
                <h1>A safe website</h1>
                <div class="f-close-wrapper">
                    <div class="f-close">x</div>
                </div>
            </div>
            <div class="s-container">
                <div class="info">
                    <h2>We are a very usefull website we promise! <br />
                    And we even do not have any viruses here.<br />
                        Enter to join our fascinating community.</h2>
                </div>
                <form action="/enter" method="POST">
                    <div class='input-wrapper'>
                        <input type="text" placeholder="username" name="username" />
                    </div>
                    <div class='input-wrapper'>
                        <input type="text" placeholder="password" name="password" />
                    </div>
                    <p>captcha:</p>
                    <div class='input-wrapper'>
                        <span style="text-align:center;cursor:default">
                            ${randomString()}
                        </span>
                        <input 
                            type="hidden" 
                            style="text-align:center;cursor:default" 
                            value=${randomString()}
                            name="captchaval"
                        ></input>
                    </div>
                    <div class='input-wrapper'>
                        <input type="text" placeholder="captcha" name="captcha" />
                    </div>
                    <div class="submit-wrapper">
                        <input type="submit" value="Enter" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</body>`)
});

router.post('/', (req, res) => {
    res.redirect('/')
});

module.exports = router;