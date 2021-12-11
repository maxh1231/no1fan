const router = require('express').Router();

const testRoutes = require('./test-route.js');

router.use('/tests', testRoutes);

module.exports = router;