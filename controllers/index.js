const router = require('express').Router();

const apiRoutes = require('./api');
const albumRoutes = require('./album-routes')

router.use('/api', apiRoutes);
router.use('/album', albumRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;