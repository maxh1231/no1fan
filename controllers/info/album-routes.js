const router = require('express').Router();
const fetch = require('node-fetch');

// renders the tracklist for album
router.get('/:id', async (req, res) => {
    let albumID = req.params.id;
    const response = await fetch(`https://api.deezer.com/album/${albumID}/`)
    if (!response.ok) {
        alert(response.statusText)
    } else {
        const data = await response.json();
        res.render('album-info', { data, loggedIn: req.session.loggedIn });
    }
});

module.exports = router;