const router = require('express').Router();
const fetch = require('node-fetch');

// renders the artist info page
// info/artist
router.use('/:id', async (req, res) => {
    // gets artist id for the page
    let artistID = req.params.id;
    // gets artist info
    const artistResponse = await fetch(
        `https://api.deezer.com/artist/${artistID}`
    );
    const artistName = await artistResponse.json();

    // gets album info
    const albumResponse = await fetch(
        `https://api.deezer.com/artist/${artistID}/albums`
    );
    const artistAlbums = await albumResponse.json();
    // gets recommended artist info
    const recommendedResponse = await fetch(
        `https://api.deezer.com/artist/${artistID}/related`
    );
    const recommended = await recommendedResponse.json();
    console.log(recommended.data.length);
    // pulls the artist bio for the page
    let searchName = artistName.name;
    const artistBioResponse = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchName}&api_key=0b84f9d0c28085fc5510cb51682d69de&format=json`
    );
    const artistBio = await artistBioResponse.json();
    // Get upcoming concerts
    const upcomingConcerts = await (
        await fetch(
            `https://api.seatgeek.com/2/events?performers.slug=${searchName.replace(
                ' ',
                '-'
            )}&per_page=10&client_id=${
                process.env.SEATGEEK_CLIENT_ID
            }&client_secret=${process.env.SEATGEEK_SECRET}`
        )
    ).json();
    console.log(upcomingConcerts);
    // Get artist MBID to feed into Setlist API
    const artistMBID = (
        await (
            await fetch(
                `https://api.setlist.fm/rest/1.0/search/artists?artistName=${searchName}&p=1&sort=relevance`,
                {
                    headers: {
                        Accept: 'application/json',
                        'x-api-key': process.env.SETLIST_API_KEY,
                    },
                }
            )
        ).json()
    ).artist[0].mbid;
    // Use MBID to get recent setlists
    const pastConcerts = await (
        await fetch(
            `https://api.setlist.fm/rest/1.0/artist/${artistMBID}/setlists?p=1`,
            {
                headers: {
                    Accept: 'application/json',
                    'x-api-key': process.env.SETLIST_API_KEY,
                },
            }
        )
    ).json();

    // pulls recommended artists into an array
    let recommendedArray = [];
    for (let i = 0; i < recommended.data.length; i++) {
        recommendedArray.push(recommended.data[i]);
    }

    // // selects a random recommended artist from the array
    // const myRecommendation = recommendedArray[Math.floor(Math.random() * recommendedArray.length)];

    // selects a random recommended artist from the array
    const myRecommendation =
        recommendedArray[Math.floor(Math.random() * recommendedArray.length)];

    // passes data to handle bars to render in html
    const artistData = {
        name: artistName.name,
        picture: artistName.picture_big,
        Shows: 'Awesome Shows',
        myRecommendation: myRecommendation,
        artistAlbums,
        artistBio: artistBio,
        upcomingConcerts: upcomingConcerts,
        pastConcerts: pastConcerts,
        recommendedArray,
        loggedIn: req.session.loggedIn,
    };
    res.render('artist-info', artistData);
});

module.exports = router;
