// Imports
const router = require('express').Router();
const fetch = require('node-fetch');

// Endpoint is /info/setlists/artist
router.get('/artist/:input', async (req, res) => {
    const artistRes = await fetch(
        `https://api.setlist.fm/rest/1.0/search/artists?artistName=${req.params.input}&p=1&sort=relevance`,
        {
            headers: {
                Accept: 'application/json',
                'x-api-key': process.env.SETLIST_API_KEY,
            },
        }
    );
    if (!artistRes.ok) {
        alert(artistRes.statusText);
    }
    const artist = await artistRes.json();
    console.log(artist.artist[0].mbid);
});

// Exports
module.exports = router;
