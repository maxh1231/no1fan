const router = require('express').Router();
const fetch = require('node-fetch');
let albumID = '51568522';


// renders the tracklist for album with hardcoded info
router.get('/', async (req, res) => {
    const response1 = await fetch(`https://api.deezer.com/album/${albumID}/tracks`)
    if (!response1.ok) {
        alert(response1.statusText)
    } else {
        const response2 = await fetch(`https://api.deezer.com/album/${albumID}/`)
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log(data1);
        console.log(data2)
        res.render('tracklist', data1);
        res.render('tracklist', data2);

    }
});

// router.get('/', async (req, res) => {
//     const response = await fetch(`https://api.deezer.com/album/${albumID}/`)
//     if (!response.ok) {
//         alert(response.statusText)
//     } else {
//         const data = await response.json();
//         console.log(data);
//         res.render('tracklist', data);
//     }
// });

module.exports = router;

