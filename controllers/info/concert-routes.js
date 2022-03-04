const router = require('express').Router();
const fetch = require('node-fetch');

// Get upcoming concerts using user's location
router.get('/', async (req, res) => {
    const concerts = await (
        await fetch(
            `https://api.seatgeek.com/2/events?taxonomies.name=concert&geoip=true&per_page=25&client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}`
        )
    ).json();
    res.render('concert-info', { concerts, locationType: true, loggedIn: req.session.loggedIn });
});

// Get upcoming concerts for one artist
router.get('/artist/:input', async (req, res) => {
    const concerts = await (
        await fetch(
            `https://api.seatgeek.com/2/events?performers.slug=${req.params.input}&per_page=25&client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}`
        )
    ).json();
    res.render('concert-info', { concerts, artistType: true, loggedIn: req.session.loggedIn });
});

// Get upcoming concerts for one venue
router.get('/venue/:input', async (req, res) => {
    const concerts = await (
        await fetch(
            `https://api.seatgeek.com/2/events?taxonomies.name=concert&venue.id=${req.params.input}&client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}`
        )
    ).json();
    res.render('concert-info', { concerts, locationType: true, loggedIn: req.session.loggedIn });
});

module.exports = router;