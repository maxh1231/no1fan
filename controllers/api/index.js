const router = require('express').Router();
const userRoutes = require('./user-routes');
const artistFavorites = require('./artist-fav-routes');
const albumFavorites = require('./album-fav-routes');


router.use('/user', userRoutes);
router.use('/artistfavorites', artistFavorites);
router.use('/albumfavorites', albumFavorites);


router.use((req, res) => {
    res.redirect('/');
});

module.exports = router;