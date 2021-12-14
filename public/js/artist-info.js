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

//artist album fetch get artist id from previous fetch
const deezerAlbumUrl = "https://api.deezer.com/artist/27/albums"

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
// get from album id from previous fetch 
const deezerTrackListUrl = "https://api.deezer.com/album/302127"

let trackList = async () => {
    const response = await fetch(deezerTrackListUrl);
    if (!response.ok) {
        console.log('error');
    }
    return (response.json());
};

trackList().then(res => {
    console.log(res);
})