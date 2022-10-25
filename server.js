const dotenv = require('dotenv');
const express = require('express');
const passport = require('passport');
const session = require('express-session')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//reqire google passport
require('./config/passport')(passport);

// ejs
app.set('view engine', 'ejs');

//express sesson
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

//passport setup
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, console.log(`active at ${PORT}`));