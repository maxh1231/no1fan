const router = require('express').Router();
const fetch = require('node-fetch');

// let artistID = '13';


// renders the artist info page 
// info/artist
router.use('/:id', async (req, res) => {
    
    let artistID = req.params.id;
    // async function fetchInfo() {
   
    const artistResponse = await fetch(`https://api.deezer.com/artist/${artistID}`);
    const artistName = await artistResponse.json();
    const albumResponse = await fetch(`https://api.deezer.com/artist/${artistID}/albums&limit=10`);
    const artistAlbums = await albumResponse.json();
    const recommendedResponse = await fetch(`https://api.deezer.com/artist/${artistID}/related&limit=1`);
    const recommended = await recommendedResponse.json();
    
    
   
    console.log(recommended);
    console.log(recommended.data[0].name);

    
    
    const artistData = {name: artistName.name, picture: artistName.picture_medium, Shows: 'Awesome Shows', recommended: recommended.data[0].name, artistAlbums };
    res.render('artist-info', artistData);
    

});




module.exports = router;