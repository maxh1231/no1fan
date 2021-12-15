const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const infoRoutes = require('./info')
const fetch = require('node-fetch');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// renders the artist info page with hardcoded info 
router.use('/artistinfo', (req, res) => {
    const deezerAlbumUrl = "https://api.deezer.com/artist/13"

let album = async () => {
    const response = await fetch(deezerAlbumUrl);
    if (!response.ok) {
        console.log('error');
    }
    return (response.json());
};

album().then(res => {
    console.log(res);
});
    res.render('artist-info', {
        artistName: res.name,
        Album1: res.title,
        Album2: "The Eminem Show",
        Album3: "Killshot",
        Album4: "Rap God",
        Album5: "Scary Movies",
        Album6: "Infinite",
        Shows: "Tomorrow"
     
        });
});

// Do we need this route? What is it for 
router.use('/info', infoRoutes);


// renders the album info page with hardcoded info
router.use('/albuminfo', (req, res) => {

    res.render('album-info', {
        albumName: "Music to be Murdered By",
        track1: "Premonition (Intro)",
        track2: "Unaccommodating",
        track3: "You Gon' Learn",
        track4: "Alfred",
        track5: "Those kinda nights",
        recommendedAlbum: "Like eminem? You might like ..."
    });
});

// What is this route for? 
router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;