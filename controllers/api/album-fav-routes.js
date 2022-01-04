const router = require('express').Router();
const { AlbumFavorites } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    AlbumFavorites.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'album_id',
            'album_name',
            'user_id'
        ],
    })
        .then(favorites => res.json(favorites))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    AlbumFavorites.create({
        album_id: req.body.album_id,
        album_name: req.body.album_name,
        user_id: req.session.user_id

    })

        .then(favorites => res.json(favorites))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.delete('/', withAuth, (req, res) => {
    AlbumFavorites.destroy({
        where: {
            user_id: req.session.user_id,
            album_id: req.body.album_id
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