const router = require('express').Router();
const fetch = require('node-fetch');



// renders the tracklist for album with hardcoded info
router.get('/:id', async (req, res) => {
    let albumID = req.params.id;
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

