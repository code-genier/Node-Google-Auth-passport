const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Home');
})
router.get('/dashboard', (req, res) => {
    res.render('Dashboard');
})

module.exports = router;