const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/:input', async (req, res) => {
    console.log(req.params.input);
    const response = await fetch(`https://api.deezer.com/search/artist?q=${req.params.input}&limit=5`);
    if (!response.ok) {
        alert(response.statusText);
    }
    const artists = await response.json();
    res.render('search', {artists});
});

module.exports = router;