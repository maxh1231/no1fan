const router = require('express').Router();

// get home
router.get('/', (req, res) => {
    res.render('home', { loggedIn: req.session.loggedIn });
});

// get signup
router.get('/signup', (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
});

// get login
router.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
});

// get dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', { loggedIn: req.session.log });
});

module.exports = router;
