const topInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id !== 'top-artist-card') {
        current = evt.target.parentElement.childNodes[1].innerText;
    } else {
        current = evt.target.childNodes[1].innerText;
    }
    document.location.replace(`/info/artist/${current}`);
}

const otherInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id !== 'search-artist-card') {
        current = evt.target.parentElement.childNodes[1].innerText;
    } else {
        current = evt.target.childNodes[1].innerText;
    }
    document.location.replace(`/info/artist/${current}`);
}

document.querySelector('#top-artist-card').addEventListener('click', topInfo);
document.querySelector('#search-results-container').addEventListener('click', otherInfo);