const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const infoRoutes = require('./info')
const fetch = require('node-fetch');
const { restore } = require('../models/User');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
let artistID = '13';
// renders the artist info page 
router.use('/artistinfo', (req, res) => {
    
    async function fetchArtist() {
        const response = await fetch(`https://api.deezer.com/artist/${artistID}`);
        const artistData = await response.json();
        return artistData;
    }
        fetchArtist().then(artistData => {
            console.log(artistData);
            
            res.render('artist-info', artistData);
        })

        async function fetchAlbums() {
            const response = await fetch(`https://api.deezer.com/artist/${artistID}/albums`);
            const albumData = await response.json();
            return albumData;
        }
            fetchAlbums().then(albumData => {
                console.log(albumData);
                console.log(albumData.data[1].title)
                
            })
            // res.render('artist-info', albumData);
    


});




// Do we need this route? What is it for 
router.use('/info', infoRoutes);


// renders the tracklist for album with hardcoded info
router.get('/albuminfo', (req, res) => {
    
});

// What is this route for? 
router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;