const router = require('express').Router();
const { SavedConcerts } = require('../../models');

// Endpoint is /api/savedconcerts/

// Get all saved concerts
router.get('/', (req, res) => {
    SavedConcerts.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: [
            'id',
            'concert_id',
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
        concert_id: req.body.concert_id,
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

// Delete a saved concert
router.delete('/', (req, res) => {
    SavedConcerts.destroy({
        where: {
            user_id: req.session.user_id,
            concert_id: req.body.concert_id,
        },
    }),
        then((concert) => {
            if (!concert) {
                res.status(404).json({
                    message: 'No concert found with this id!',
                });
                return;
            }
            res.json(concert);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
