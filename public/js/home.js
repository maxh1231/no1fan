const search = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#home-search-input').value.trim();
    console.log(input);
}

document.querySelector('#home-search-form').addEventListener('submit', search);