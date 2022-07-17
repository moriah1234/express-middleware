const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 20px;
    }

    body {
        background-image: linear-gradient(to right top, #08367b, #332354, #301632, #200d18, #000000);
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }

    input[type=text] {
        border: #fff solid .1vw;
        background-color: #0000;
        border-radius: 50vw;
        height: 6vh;
        width: 15vw;
        text-align: center;
        color: #fff;
    }

    input[type=text]:focus {
        box-shadow: 0 0 15px 1px #fff9;
    }

    ::-moz-selection {
        /* Code for Firefox */
        color: #000;
        background: #fff;
    }

    ::selection {
        color: #000;
        background: #fff;
    }

    input[type=submit] {
        background-color: #fff;
        border: #000 1px solid;
        color: #000;
        border-radius: 50vh;
        height: 5vh;
        width: 10vw
    }

    h1 {
        color: #fff;
        font-size: 3em;
        margin-bottom: -1.5vh;
    }

    input[type=submit]:hover {
        background-color: #000;
        color: #fff;
        border-color: #fff;
        transition: .3s;
    }

    form {
        width: 30vw;
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }

    div {
        display: flex;
        align-items: center;
    }

    span {
        margin-right: 1vw;
    }
</style>

<body>
    <h1>Express Middleware</h1>
    <form action="/enter" method="POST">
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password"/>
        <input type="text" placeholder="age" name="age"/>
        <input type="submit" value="Enter"/>
    </form>
</body>`)
})

router.post('/', (req, res) => {
    console.log('req: ', req.body);
    console.log('jdidbvcudbcdcvfcfr');
    res.send('gsycjdfyueufci b')
})
module.exports = router;