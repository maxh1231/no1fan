const router = require('express').Router();
const { Test } = require('../../models');

router.get('/', (req, res) => {
    Test.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name',
        ],
    })
        .then(testData => res.json(testData))
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Test.create({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
    })
        .then(testData => res.json(testData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;