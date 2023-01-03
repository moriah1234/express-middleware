const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(` 
        <title>Error</title>
        <p> Error 405: Not Allowed </p>
        `)
});

module.exports = router;