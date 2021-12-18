const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
<<<<<<< HEAD
const infoRoutes = require('./info');
=======
const infoRoutes = require('./info')
>>>>>>> develop

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/info', infoRoutes);

<<<<<<< HEAD
// renders the tracklist for album with hardcoded info
router.get('/albuminfo', (req, res) => {});

=======
>>>>>>> develop
router.use((req, res) => {
    res.redirect('/');
});

module.exports = router;
