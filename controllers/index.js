const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// renders the artist info page with hardcoded info 
router.use('/artistinfo', (req, res) => {
    
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



// renders the album info page with hardcoded info
router.use('/albuminfo', (req, res) => {

    res.render('album-info', {
        albumName: "Music to be Murdered By",
        track1: "Premonition (Intro)",
        track2: "Unaccommodating",
        track3: "You Gon' Learn",
        track4: "Alfred",
        track5: "Those kinda nights",
        recommendedAlbum: "Like eminem? You might like ..."
    });
});


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;