const getTracks = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'album-card') {
        current = evt.target.childNodes[1].innerText;
    } else {
        current = evt.target.parentElement.childNodes[1].innerText;
    }
    document.location.assign(`/info/album/${current}`);
}

const getRecommended = (evt) => {
    evt.preventDefault();
    let recommended = '';
    if (evt.target.id === 'recommended-artist-card') {
        recommended = evt.target.childNodes[1].innerText;
        
        
    } else {
        recommended = evt.target.parentElement.childNodes[1].innerText
    }
    document.location.assign(`/info/artist/${recommended}`);
    
}


document.querySelector('#discography-wrapper').addEventListener('click', getTracks);
document.querySelector('#recommended-wrapper').addEventListener('click', getRecommended);

