const router = require('express').Router();
const userRoutes = require('./user-routes');
const ArtistFavorites = require('./artist-routes');


router.use('/user', userRoutes);
router.use('/artistfavorites', ArtistFavorites);


router.use((req, res) => {
    res.redirect('/');
});

module.exports = router;