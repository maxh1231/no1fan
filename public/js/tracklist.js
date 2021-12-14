const fetch = require('node-fetch');
const deezerURL = 'https://api.deezer.com/album/302127'

let run = async () => {
    const response = await fetch(deezerURL);
    if (!response.ok) {
        console.log('error');
    }
    return (response.json());
};

run().then(res => {
    console.log(res);
});

window.onload = function () {
    run();
}

