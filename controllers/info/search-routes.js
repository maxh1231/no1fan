const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/:input', async (req, res) => {
    const artistRes = await fetch(`https://api.deezer.com/search/artist?q=${req.params.input}&limit=10`);
    const trackRes = await fetch(`https://api.deezer.com/search/track?q=${req.params.input}&limit=10`);
    const albumRes = await fetch(`https://api.deezer.com/search/album?q=${req.params.input}&limit=10`);
    if (!artistRes.ok || !trackRes.ok || !albumRes.ok) {
        alert(artistRes.statusText);
    }
    const artists = await artistRes.json();
    const tracks = await trackRes.json();
    const albums = await albumRes.json();
    if (artists.total !== 0) {
        res.render('search', {artists: artists, tracks: tracks, albums: albums, loggedIn: req.session.loggedIn});
    } else {
        res.render('search', {none: true, loggedIn: req.session.loggedIn})
    }
});

module.exports = router;