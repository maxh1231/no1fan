const artistInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'artist-card') {
        current = evt.target.childNodes[1].innerText;
    } else {
        current = evt.target.parentElement.childNodes[1].innerText;
    }
    document.location.assign(`/info/artist/${current}`);
}

const albumInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'search-album-card') {
        current = evt.target.childNodes[1].innerText;
    } else {
        current = evt.target.parentElement.childNodes[1].innerText;
    }
    document.location.assign(`/info/album/${current}`);
}

document.querySelector('#top-result-container').addEventListener('click', artistInfo);
document.querySelector('#artist-results-container').addEventListener('click', artistInfo);
document.querySelector('#album-results-container').addEventListener('click', albumInfo);