const router = require('express').Router();
const { SavedConcerts } = require('../../models');
const withAuth = require('../../utils/auth');

// Endpoint is /api/savedconcerts/

// Get all saved concerts
router.get('/', withAuth, (req, res) => {
    SavedConcerts.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: [
            'id',
            'artist_name',
            'venue_name',
            'date',
            'setlist_url',
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
router.post('/', withAuth, (req, res) => {
    SavedConcerts.create({
        artist_name: req.body.artist_name,
        venue_name: req.body.venue_name,
        date: req.body.date,
        setlist_url: req.body.setlist_url,
        user_id: req.session.user_id,
    })
        .then((concerts) => res.json(concerts))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a saved concert
router.delete('/', withAuth, (req, res) => {
    SavedConcerts.destroy({
        where: {
            user_id: req.session.user_id,
            artist_name: req.body.artist_name,
            date: req.body.date,
        },
    })
        .then((concerts) => {
            if (!concerts) {
                res.status(404).json({
                    message: 'No concert found with this id!',
                });
                return;
            }
            res.json(concerts);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
