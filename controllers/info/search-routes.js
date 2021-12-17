const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/:input', async (req, res) => {
    console.log(req.params.input);
    const artistRes = await fetch(`https://api.deezer.com/search/artist?q=${req.params.input}&limit=4`);
    if (!artistRes.ok) {
        alert(artistRes.statusText);
    }
    const artists = await artistRes.json();
    const trackRes = await fetch(`https://api.deezer.com/search/track?q=${req.params.input}&limit=5`);
    if (!trackRes.ok) {
        alert(trackRes.statusText);
    }
    const tracks = await trackRes.json();
    res.render('search', {artists: artists, tracks: tracks});
});

module.exports = router;