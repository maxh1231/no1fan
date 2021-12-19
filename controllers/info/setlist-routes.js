// Imports
const router = require('express').Router();
const fetch = require('node-fetch');

// Endpoint is ./info/setlists/artist

// Get most recent setlists for one artist
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
    const artistSetlist = await (
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
    console.log(artistSetlist);
});

// Exports
module.exports = router;
