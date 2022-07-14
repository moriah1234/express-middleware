
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
        background-image: linear-gradient(to right top, #5d0000, #49040b, #34080f, #20060c, #000000);
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
        color: #f00;
        font-size: 5em;
    }

    h3 {
        color: #fff;
        font-size:3em;
    }

</style>

<body>
<h1>You Are Not Allowed Here</h1>
<h3>However you <strong>can</strong> make this page avialable to you...</h3>
</body>`)
})

module.exports = router;
