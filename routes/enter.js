const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(` 
    <head>
    <title>Entrance</title>
    <link rel='stylesheet' href='/stylesheet/enter.css' />
    </head>
    <body className="enter-body">
        <form action="/enter" method="POST">
            <div class='input-wrapper'>
                <input type="text" placeholder="username" name="username" />
            </div>
            <div class='input-wrapper'>
                <input type="text" placeholder="password" name="password" />
            </div>
            <div class="submit-wrapper">
                <input type="submit" value="Enter" />
            </div>
        </form>
    </body>
`)
});

router.post('/', (req, res) => {
    res.redirect('/')
});

module.exports = router;