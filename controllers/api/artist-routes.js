const router = require('express').Router();
const { AlbumFavorites, ArtistFavorites } = require('../../models');

router.get('/', (req, res) => {
    ArtistFavorites.findAll({
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
                res.status(404).json({ message: 'No post found with this id' });
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