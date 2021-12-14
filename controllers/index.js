const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const infoRoutes = require('./info')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/info', infoRoutes);

router.use((req, res) => {
    res.status(404).end();
});




module.exports = router;