// Imports
const router = require('express').Router();
const fetch = require('node-fetch');

// Endpoint is ./info/setlists/

// Get most recent setlists/shows for one artist
router.get('/artist/:input', async (req, res) => {
    // Get artist MBID to feed into Setlist API
    const artistMBID = (
        await (
            await fetch(
                `https://api.setlist.fm/rest/1.0/search/artists?artistName=${req.params.input}&p=1&sort=relevance`,
                {
                    headers: {
                        Accept: 'application/json',
                        'x-api-key': process.env.SETLIST_API_KEY,
                    },
                }
            )
        ).json()
    ).artist[0].mbid;
    // Use MBID to get recent setlists
    const artistSetlists = await (
        await fetch(
            `https://api.setlist.fm/rest/1.0/artist/${artistMBID}/setlists?p=1`,
            {
                headers: {
                    Accept: 'application/json',
                    'x-api-key': process.env.SETLIST_API_KEY,
                },
            }
        )
    ).json();
    // Render concert info with indicator that it's coming from Setlist.fm
    res.render('concert-info', { artistSetlists, setlistType: true });
});

// Get most recent setlists/shows for one venue
router.get('/venue/:input', async (req, res) => {
    // https://api.setlist.fm/rest/1.0/search/venues?p=1&cityName=salt%20lake%20city&name=the%20complex
    // How to pull two different sets of params?
    // req.body / req.params;
    // venue/:city/:input
    // Get venue ID to feed into Setlist API
    const venueID = (
        await (
            await fetch(
                `https://api.setlist.fm/rest/1.0/search/venues?name=${req.params.input}&p=1`,
                {
                    headers: {
                        Accept: 'application/json',
                        'x-api-key': process.env.SETLIST_API_KEY,
                    },
                }
            )
        ).json()
    ).venue[0].id;
    // Use venue ID to get recent setlists
    const venueSetlists = await (
        await fetch(
            `https://api.setlist.fm/rest/1.0/venue/${venueID}/setlists?p=1`,
            {
                headers: {
                    Accept: 'application/json',
                    'x-api-key': process.env.SETLIST_API_KEY,
                },
            }
        )
    ).json();
    // Send setlist body back
    res.send(venueSetlists);
});

// Exports
module.exports = router;
