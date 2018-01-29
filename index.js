const express = require('express');
const passport = require('passport');

require('./services/passport');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');


const app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    keys: [keys.cookieSessionKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 4000;


app.listen(PORT);
