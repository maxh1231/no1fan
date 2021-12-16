const fetch = require('node-fetch');

// artist info fetch- will be generated from a search 
const deezerArtistURL = 'https://api.deezer.com/artist/27'

let run = async () => {
    const response = await fetch(deezerArtistURL);
    if (!response.ok) {
        console.log('error');
    }
    return (response.json());
};

run().then(res => {
    console.log(res);
    console.log(res.id);
    console.log(res.name);
    
});
