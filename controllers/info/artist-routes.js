const router = require('express').Router();
const fetch = require('node-fetch');

// info/artist
router.use('/:id', async (req, res) => {
    let artistID = req.params.id;
    // gets artist info
    const artistResponse = await fetch(`https://api.deezer.com/artist/${artistID}`);
    const artistName = await artistResponse.json();
    // gets album info
    const albumResponse = await fetch(`https://api.deezer.com/artist/${artistID}/albums`);
    const artistAlbums = await albumResponse.json();
    // gets recommended artist info
    const recommendedResponse = await fetch(`https://api.deezer.com/artist/${artistID}/related`);
    const recommended = await recommendedResponse.json();
    // pulls the artist bio for the page
    let searchName = artistName.name;
    const artistBioResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchName}&api_key=${process.env.LASTFM_API_KEY}&format=json`);
    const artistBio = await artistBioResponse.json();

    // Get upcoming concerts
    const upcomingConcerts = await (
        await fetch(`https://api.seatgeek.com/2/events?performers.slug=${searchName.replace(' ','-')}&per_page=10&client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_SECRET}`)
    ).json();
    // Get artist MBID to feed into Setlist API
    let pastConcerts
    const response = await fetch(`https://api.setlist.fm/rest/1.0/search/artists?artistName=${searchName}&p=1&sort=relevance`,
        {
            headers: {
                Accept: 'application/json',
                'x-api-key': process.env.SETLIST_API_KEY,
            },
        }
    )
    if (!response.ok) {
        pastConcerts = null
    } else {
        const data = await response.json()
        const artistMBID = data.artist[0].mbid;
        // Use MBID to get recent setlists
        pastConcerts = await (
            await fetch(
                `https://api.setlist.fm/rest/1.0/artist/${artistMBID}/setlists?p=1`,
                {
                    headers: {
                        Accept: 'application/json',
                        'x-api-key': process.env.SETLIST_API_KEY_2,
                    },
                }
            )
        ).json();
    }

    // pulls recommended artists into an array
    let recommendedArray = [];
    for (let i = 0; i < recommended.data.length; i++) {
        recommendedArray.push(recommended.data[i]);
    }

    // passes data to handle bars to render in html
    const artistData = { name: artistName.name, picture: artistName.picture_big, Shows: 'Awesome Shows', artistAlbums, artistBio: artistBio, upcomingConcerts: upcomingConcerts, pastConcerts: pastConcerts, recommendedArray, loggedIn: req.session.loggedIn };
    res.render('artist-info', artistData);
});

module.exports = router;