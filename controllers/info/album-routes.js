const router = require('express').Router();

// renders the tracklist for album with hardcoded info
router.get('/', (req, res) => {



    res.render('tracklist', {
        AlbumName: "The Eminem Show",
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

module.exports = router;