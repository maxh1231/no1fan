const search = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#home-search-input').value.trim();
    document.location.assign(`/info/search/${input}`)
}

const getInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id !== 'top-artist-card') {
        current = evt.target.parentElement.childNodes[1].innerText;
    } else {
        current = evt.target.childNodes[1].innerText;
    }
    document.location.assign(`/info/artist/${current}`);
}

document.querySelector('#top-artist-container').addEventListener('click', getInfo);
document.querySelector('#home-search-form').addEventListener('submit', search);

var x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

getLocation();