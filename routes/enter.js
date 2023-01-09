const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/enter.html"));
});

router.post('/', (req, res) => {
    res.redirect('/home');


    // for exercise #4
    // res.send(`
    // <div>
    //! write your html here
    // <a href="/home">continue</a>
    // </div>
    // `)
});

module.exports = router;