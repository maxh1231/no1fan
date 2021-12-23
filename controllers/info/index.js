const router = require('express').Router();
const artistRoutes = require('./artist-routes.js');
const albumRoutes = require('./album-routes');
const searchRoutes = require('./search-routes');
const setlistRoutes = require('./setlist-routes');
const concertRoutes = require('./concert-routes');

router.use('/artist', artistRoutes);
router.use('/album', albumRoutes);
router.use('/search', searchRoutes);
router.use('/setlists', setlistRoutes);
router.use('/concerts', concertRoutes);

router.use((req, res) => {
    res.redirect('/');
});

module.exports = router;
