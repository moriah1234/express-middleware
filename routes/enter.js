const express = require('express');
const router = express.Router();
const path = require('path');
const userDataMiddleware = require('../middlewares/userDataMiddleware');
const checkIpMiddleware = require('../middlewares/checkIpMiddleware');
const redirectIfBlockedMiddleware = require('../middlewares/redirectIfBLockedMiddleware');
const userDataMiddleware2 = require('../middlewares/userDataMiddleware2');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.get('/', userDataMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/enter.html"));
});

router.post('/',
    // userDataMiddleware,
    checkIpMiddleware,
    userDataMiddleware2,
    validationMiddleware,
    redirectIfBlockedMiddleware,
    (req, res) => {

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