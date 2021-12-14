const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const albumRoutes = require('./album-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/album', albumRoutes);

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

// renders the tracklist for album with hardcoded info
router.use('/albuminfo', (req, res) => {



    res.render('tracklist', {
        AlbumName: "Curtains Up",
        Track1: "White America",
        Track2: "Business",
        Track3: "Cleanin' Out My Closet",
        Track4: "Square Dance",
        Track5: "The Kiss",
        Track6: "Soldier",
        Track7: "Say Goodbye Hollywood",
        Track8: "Drips",
        Track9: "Without Me",
        Track10: "Paul Rosenberg",
        Track11: "Sing For The Moment",
        Track12: "Superman",
        Track13: "Hailie's Song",
        Track14: "Steve Berman",
        Track15: "When The Music Stops",
        Track16: "Say What You Say",
        Track17: "'Till I collapse",
        Track18: "My Dad's Gone Crazy",
        Track19: "Curtains Close"

    });
});

router.use((req, res) => {
    res.status(404).end();
});




module.exports = router;