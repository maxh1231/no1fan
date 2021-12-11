const router = require('express').Router();
const userRoutes = require('./user-routes');
const testRoutes = require('./test-route.js');

router.use('/tests', testRoutes);
router.use('/user', userRoutes);

module.exports = router;