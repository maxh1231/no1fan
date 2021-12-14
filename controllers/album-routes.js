const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('tracklist');

})

module.exports = router;