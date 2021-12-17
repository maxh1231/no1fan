const router = require('express').Router();
const fetch = require('node-fetch');

// get home
router.get('/', async (req, res) => {
    const response = await fetch('https://api.deezer.com/chart/0/artists');
    if (!response.ok) {
        alert(response.statusText);
        return;
    }
    const topArtists = await response.json()
    res.render('home', {  topArtists, loggedIn: req.session.loggedIn });
});

// get signup
router.get('/signup', (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
});

// get login
router.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
});

module.exports = router;