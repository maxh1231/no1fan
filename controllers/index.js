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

router.use((req, res) => {
    res.status(404).end();
});




module.exports = router;