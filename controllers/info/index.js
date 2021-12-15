const router = require('express').Router();
// const artistRoutes = require('./artist-routes.js');
const albumRoutes = require('./album-routes');

// router.use('/artist', artistRoutes);
router.use('/album', albumRoutes);

module.exports = router;