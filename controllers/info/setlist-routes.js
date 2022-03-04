const router = require('express').Router();
const fetch = require('node-fetch');

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
    const setlists = await (
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
    res.render('setlist-info', { setlists, artistType: true, loggedIn: req.session.loggedIn });
});

// Get most recent setlists/shows for one venue
router.get('/venue/:input', async (req, res) => {
    // Use venue ID to get recent setlists
    const setlists = await (
        await fetch(
            `https://api.setlist.fm/rest/1.0/venue/${req.params.input}/setlists?p=1`,
            {
                headers: {
                    Accept: 'application/json',
                    'x-api-key': process.env.SETLIST_API_KEY,
                },
            }
        )
    ).json();
    // Send setlist body back
    res.render('setlist-info', { setlists, venueType: true, loggedIn: req.session.loggedIn });
});

module.exports = router;