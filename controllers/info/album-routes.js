const router = require('express').Router();
const fetch = require('node-fetch');


// renders the tracklist for album with hardcoded info
router.get('/', async (req, res) => {
    const response = await fetch('https://api.deezer.com/album/302127/tracks')
    if (!response.ok) {
        alert(response.statusText)
    } else {
        const data = await response.json();
        console.log(data);
        res.render('tracklist', data);
    }
});

module.exports = router;

