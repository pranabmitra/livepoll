const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.get('/', requireLogin, (req, res) => {
        res.send('You are logged in, your profile id is: ' + req.user.id);
    });

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/'); // redirect to home
    });
};
