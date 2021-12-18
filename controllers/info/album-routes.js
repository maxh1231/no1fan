const router = require('express').Router();
const fetch = require('node-fetch');
let albumID = '103248';


// renders the tracklist for album with hardcoded info
router.get('/', async (req, res) => {
    const response = await fetch(`https://api.deezer.com/album/${albumID}/`)
    if (!response.ok) {
        alert(response.statusText)
    } else {
        const data = await response.json();
        console.log(data);
        console.log(data.tracks)
        res.render('tracklist', { data });
    }
});

module.exports = router;

