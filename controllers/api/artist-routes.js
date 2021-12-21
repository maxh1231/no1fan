const router = require('express').Router();
const { User, AristFavorites, AlbumFavorites, } = require('../../models');

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
            user_id: req.session.id
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

router.post('/', (req, res) => {
    ArtistFavorites.create({
        artist_id: req.body.artist_id,
        artist_name: req.body.artist_name,
        user_id: req.session.id

    })

        .then(favorites => res.json(favorites))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.delete('/:id', (req, res) => {
    ArtistFavorites.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(favorites => {
            if (favorites) {
                res.status(404).json({ message: 'No favorite found with this id' });
                return;
            }
            res.json(favorites);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
