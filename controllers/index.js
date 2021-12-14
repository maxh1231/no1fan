const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/artistinfo', (req, res) => {
    res.render('artist-info');
});

router.use((req, res) => {
    res.status(404).end();
});




module.exports = router;