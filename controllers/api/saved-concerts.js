const router = require('express').Router();
const { SavedConcerts } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all saved concerts
router.get('/', (req, res) => {
    SavedConcerts.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: [
            'id',
            'artist_id',
            'artist_name',
            'venue_name',
            'date',
            'user_id',
        ],
    })
        .then((concerts) => res.json(concerts))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Add a saved concert
router.post('/', (req, res) => {
    SavedConcerts.create({
        artist_id: req.body.artist_id,
        artist_name: req.body.artist_name,
        venue_name: req.body.venue_name,
        date: req.body.date,
        user_id: req.session.user_id,
    })
        .then((concerts) => res.json(concerts))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
