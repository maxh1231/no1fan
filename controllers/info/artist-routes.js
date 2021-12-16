const router = require('express').Router();
const fetch = require('node-fetch');

let artistID = '13';

// renders the artist info page 
// info/artist
router.use('/', async (req, res) => {
    // async function fetchInfo() {
    const artistResponse = await fetch(`https://api.deezer.com/artist/${artistID}`);
    const artistName = await artistResponse.json();
    const albumResponse = await fetch(`https://api.deezer.com/artist/${artistID}/albums`);
    const artistAlbums = await albumResponse.json();
    // return {name: artistName, albums: artistAlbums};
    console.log(artistAlbums);
    console.log(artistName);
    const albumData = {name: artistName.name, Shows: 'Awesome Shows' };
    res.render('artist-info', albumData);
    

});




module.exports = router;