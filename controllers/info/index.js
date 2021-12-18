const router = require('express').Router();
const artistRoutes = require('./artist-routes.js');
const albumRoutes = require('./album-routes');
const searchRoutes = require('./search-routes');

router.use('/artist', artistRoutes);
router.use('/album', albumRoutes);
router.use('/search', searchRoutes);

router.use((req, res) => {
    res.redirect('/');
});

module.exports = router;