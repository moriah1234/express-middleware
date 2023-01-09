
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/home.html"))
})

// router.get('/:status', (req, res) => {
//     res.sendFile(path.join(__dirname, "../pages/home.html"))
// })
module.exports = router;
