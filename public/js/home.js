const search = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#home-search-input').value.trim();
    document.location.replace(`/info/search/${input}`)
}

document.querySelector('#home-search-form').addEventListener('submit', search);