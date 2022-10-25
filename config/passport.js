const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

dotenv.config();


const User = {
    name: 'Aayush',
    college: 'N'
}

module.exports = function( passport ){
    passport.use(new GoogleStrategy({
        clientID : process.env['GOOGLE_CLIENT_ID'],
        clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
        callbackURL: '/auth/googleCallback'
    },
    async(accessToken, refreshToken, profile, done) => {
        console.log(profile);
        // add this proflie to db and check if exist
        // if exist do below code
        done(null, {User});
        // else add this user to db ans do above code
    }
    ))
}

passport.serializeUser(function(User, done) { done(null, {}) });
passport.deserializeUser(function(User, done) { done(null, {}) });



