const router = require('express').Router();
const fetch = require('node-fetch');
const sequelize = require('../config/connection');
const { User, ArtistFavorites, AlbumFavorites, SavedConcerts  } = require('../models');

// get home
router.get('/', async (req, res) => {
    const artistRes = await fetch('https://api.deezer.com/chart/0/artists');
    const trackRes = await fetch(
        'https://api.deezer.com/chart/0/tracks&limit=10'
    );
    const showRes = await fetch(
        `https://api.seatgeek.com/2/events?geoip=true&type=concert&client_id=${process.env.SG_ID}`
    );
    const randomRes = await fetch(
        `https://api.deezer.com/chart/0/tracks?index=${
            Math.floor(Math.random() * 100) + 1
        }`
    );
    if (!artistRes.ok || !trackRes.ok || !showRes || !randomRes) {
        alert(artistRes.statusText);
        return;
    }
    const topArtists = await artistRes.json();
    const topTracks = await trackRes.json();
    const shows = await showRes.json();
    const random = await randomRes.json();
    res.render('home', {
        topArtists,
        topTracks,
        shows,
        random,
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
router.get('/dashboard', async (req, res) => {
    const response = await User.findOne({
        where: { id: req.session.user_id },
        attributes: ['id', 'username', 'email', 'createdAt', [sequelize.literal('(SELECT COUNT(*) FROM savedconcerts WHERE user.id = savedconcerts.user_id)'), 'count']],
        include: [
            { model: ArtistFavorites },
            { model: AlbumFavorites },
            { model: SavedConcerts }
        ]
    });
    const data = response.dataValues
    res.render('dashboard', { data, loggedIn: req.session.loggedIn });
});

module.exports = router;