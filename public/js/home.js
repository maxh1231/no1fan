const getInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'artist-card' || evt.target.id === 'track-artist') {
        current = evt.target.childNodes[1].innerText
    } else if (evt.target.id === 'artist-img' || evt.target.id === 'artist-name') {
        current = evt.target.parentElement.childNodes[1].innerText;
    } else {
        return;
    }
    document.location.assign(`/info/artist/${current}`);
}

document.querySelector('#top-artist-container').addEventListener('click', getInfo);
document.querySelector('#top-track-table').addEventListener('click', getInfo);