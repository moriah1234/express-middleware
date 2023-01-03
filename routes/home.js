
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <head>
        <title>Home</title>
    </head>
    <body>
        <p>Log all of the user data: </p>
        <ul>
            <li>Ip</li>
            <li>User agent</li>
            <li>Current route in website</li>
            <li>Entrance Time</li>
        </ul>
    </body>
    `)
})

module.exports = router;
