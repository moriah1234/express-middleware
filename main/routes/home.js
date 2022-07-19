
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`  <style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-image: linear-gradient(to right top, #08367b, #332354, #301632, #200d18, #000000);
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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

    h1 {
        color: #fff;
        font-size: 5em;
    }

    h3 {
        color: #fff;
        font-size:3em;
    }

</style>

<body>
<h1>You Are In!</h1>
<h3>Your next mission will arrive soon</h3>

</body>`)
})

module.exports = router;
