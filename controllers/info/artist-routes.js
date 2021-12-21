const router = require('express').Router();
const fetch = require('node-fetch');




// renders the artist info page 
// info/artist
router.use('/:id', async (req, res) => {
    
    let artistID = req.params.id;
    
    // async function fetchInfo() {
   
    const artistResponse = await fetch(`https://api.deezer.com/artist/${artistID}`);
    const artistName = await artistResponse.json();
    const albumResponse = await fetch(`https://api.deezer.com/artist/${artistID}/albums`);
    const artistAlbums = await albumResponse.json();
    const recommendedResponse = await fetch(`https://api.deezer.com/artist/${artistID}/related`);
    const recommended = await recommendedResponse.json();
    
    
    // pulls recommended artists into an array and selects a random one 
    let recommendedArray = [];
    for (let i = 0; i < recommended.data.length; i++) {
        recommendedArray.push(recommended.data[i]);
        // console.log(recommendedArray[i]);
        
        
        
        
    }
    
    const myRecommendation = recommendedArray[Math.floor(Math.random() * recommendedArray.length)];
   

  
   
    
    

    
    
    const artistData = {name: artistName.name, picture: artistName.picture_medium, Shows: 'Awesome Shows', myRecommendation: myRecommendation, artistAlbums };
    res.render('artist-info', artistData);
    

});




module.exports = router;