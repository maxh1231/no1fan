const router = require('express').Router();
const fetch = require('node-fetch');
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
        attributes: { exclude: ['password'] },
        include: [
            {
                model: ArtistFavorites,
                attributes: ['id', 'artist_id', 'artist_name', 'user_id']
            },
            {
                model: AlbumFavorites,
                attributes: ['id', 'album_id', 'album_name', 'user_id']
            },
            {
                model: SavedConcerts,
                attributes: ['id', 'artist_name', 'venue_name', 'date', 'setlist_url', 'user_id']
            }
        ]
    });
    // console.log(response);
    const data = response.dataValues
    console.log(data)
    res.render('dashboard', { data, loggedIn: req.session.loggedIn });
});

module.exports = router;
