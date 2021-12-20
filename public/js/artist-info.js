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


document.querySelector('#album-card').addEventListener('click', getTracks);

console.log('hello world');