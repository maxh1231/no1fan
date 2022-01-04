const router = require('express').Router();
const {  ArtistFavorites } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    if (!req.session.user_id) {
        // console.log("User not logged in")
        return;
    } else {

        ArtistFavorites.findAll({
            where: {
                user_id: req.session.user_id
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
    }
});

router.post('/', withAuth, (req, res) => {
    ArtistFavorites.create({
        artist_id: req.body.artist_id,
        artist_name: req.body.artist_name,
        user_id: req.session.user_id

    })

        .then(favorites => res.json(favorites))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.delete('/', withAuth, (req, res) => {
    ArtistFavorites.destroy({
        where: {
            user_id: req.session.user_id,
            artist_id: req.body.artist_id
        }
    })
        .then(favorites => {
            if (!favorites) {
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
