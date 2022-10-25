const express = require("express");
const passport = require('passport');

const router = express.Router();

router.get('/googleAuth', passport.authenticate('google', {
    scope: [ 'profile' ]
  }));

router.get('/googleCallback', passport.authenticate('google', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/dashboard');
})

module.exports = router;