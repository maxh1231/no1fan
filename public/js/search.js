const artistInfo = (evt) => {
    let current = '';
    if (evt.target.id === 'artist-card') {
        current = evt.target.childNodes[1].innerText;
    } else if (evt.target.id === 'artist-img' || evt.target.id === 'artist-name') {
        current = evt.target.parentElement.childNodes[1].innerText;
    } else {
        return;
    }
    document.location.assign(`/info/artist/${current}`);
}

const albumInfo = (evt) => {
    let current = '';
    if (evt.target.id === 'album-card') {
        current = evt.target.childNodes[1].innerText;
    } else if (evt.target.id === 'album-picture' || evt.target.id === 'album-name') {
        current = evt.target.parentElement.childNodes[1].innerText;
    } else {
        return;
    }
    document.location.assign(`/info/album/${current}`);
}

const artistCard = document.querySelector('#artist-card');
if (artistCard) {
    artistCard.addEventListener('click', artistInfo);
}
const artistContainer = document.querySelector('#artist-results-container');
if (artistContainer) {
    artistContainer.addEventListener('click', artistInfo);
}
const albumContainer = document.querySelector('#album-results-container');
if (albumContainer) {
    albumContainer.addEventListener('click', albumInfo);
}