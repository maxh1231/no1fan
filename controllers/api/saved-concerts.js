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
