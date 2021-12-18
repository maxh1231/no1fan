const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/:input', async (req, res) => {
    const artistRes = await fetch(`https://api.deezer.com/search/artist?q=${req.params.input}&limit=4`);
    const trackRes = await fetch(`https://api.deezer.com/search/track?q=${req.params.input}&limit=5`);
    if (!artistRes.ok || !trackRes.ok) {
        alert(artistRes.statusText);
    }
    const artists = await artistRes.json();
    const tracks = await trackRes.json();
    res.render('search', {artists: artists, tracks: tracks, loggedIn: req.session.loggedIn});
});

module.exports = router;