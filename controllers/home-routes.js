const router = require('express').Router();
const fetch = require('node-fetch');

// get home
router.get('/', async (req, res) => {
    const artistRes = await fetch('https://api.deezer.com/chart/0/artists');
    const trackRes = await fetch(
        'https://api.deezer.com/chart/0/tracks&limit=5'
    );
    const showRes = await fetch(
        `https://api.seatgeek.com/2/events?geoip=true&type=concert&client_id=${process.env.SG_ID}`
    );
    if (!artistRes.ok || !trackRes.ok || !showRes) {
        alert(artistRes.statusText);
        return;
    }
    const topArtists = await artistRes.json();
    const topTracks = await trackRes.json();
    const shows = await showRes.json();
    res.render('home', {
        topArtists,
        topTracks,
        shows,
        loggedIn: req.session.loggedIn,
    });
});

// get signup
router.get('/signup', (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn, hideBtn: true });
});

// get login
router.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn, hideBtn: true });
});

// get dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', { loggedIn: req.session.log });
});

module.exports = router;
