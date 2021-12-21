const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, AristFavorites, AlbumFavorites, ArtistFavorites } = require('../../models');

// get all favorites by all users
router.get('/', (req, res) => {
    ArtistFavorites.findAll({


        attributes: [
            'id',
            'artist_id',
            'artist_name',
            'user_id'
        ],
    })
        .then(favorites => res.json(favorites))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    ArtistFavorites.findOne({

        where: {
            id: req.session.id
        },
        attributes: [
            'id',
            'artist_id',
            'artist_name',
            'user_id'
        ],
    })
        .then(favorites => res.json(favorites))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
