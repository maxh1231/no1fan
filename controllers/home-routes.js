const router = require('express').Router();

// get home
router.get('/', (req, res) => {
    res.render('home');
});

// get signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

// get login
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;