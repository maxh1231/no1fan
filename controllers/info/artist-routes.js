const router = require('express').Router();

// renders the artist info page with hardcoded info 
router.get('/', (req, res) => {



    res.render('artist-info', {
        artistName: "Eminem",
        Album1: "Music to be Murdered By",
        Album2: "The Eminem Show",
        Album3: "Killshot",
        Album4: "Rap God",
        Album5: "Scary Movies",
        Album6: "Infinite",
        Shows: "Tomorrow"

    });
});

module.exports = router;