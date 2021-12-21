const search = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#home-search-input').value.trim();
    document.location.assign(`/info/search/${input}`)
}

const getInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'artist-card') {
        current = evt.target.childNodes[1].innerText;
    } else {
        current = evt.target.parentElement.childNodes[1].innerText;
    }
    document.location.assign(`/info/artist/${current}`);
}

document.querySelector('#top-artist-container').addEventListener('click', getInfo);
document.querySelector('#home-search-form').addEventListener('submit', search);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported or allowed.");
  }
}
 
const showPosition =  async (position) => {
  console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
  const response = await fetch(`https://api.seatgeek.com/2/events?lat=${position.coords.latitude}&lon=${position.coords.longitude}&type=concert&client_id=MjUwMzA3ODd8MTYzOTc5ODE1MS45NDE3NTg2`);
  const data = await response.json();
  console.log(data);
}

getLocation();