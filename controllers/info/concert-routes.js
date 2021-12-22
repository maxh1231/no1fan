// Imports
const router = require('express').Router();
const fetch = require('node-fetch');

// Endpoint is ./info/concerts

// Get upcoming concerts for one artist
router.get('/artist/:input', async (req, res) => {
    const concerts = await (
        await fetch(
            `https://api.seatgeek.com/2/events?performers.slug=${req.params.input}&client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}`
        )
    ).json();
    res.send(concerts);
});

// Get upcoming concerts using user's location
router.get('/', async (req, res) => {
    const concerts = await (
        await fetch(
            `https://api.seatgeek.com/2/events?taxonomies.name=concert&geoip=true&per_page=25&client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}`
        )
    ).json();
    res.render('concert-info', { concerts, seatGeekType: true });
});

// Exports
module.exports = router;
