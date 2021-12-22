const search = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#home-search-input').value.trim();
    document.location.assign(`/info/search/${input}`)
}

const getInfo = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'artist-card') {
        current = evt.target.childNodes[1]
          artist.innerText = data.events[i].title;
    } else {
        current = evt.target.parentElement.childNodes[1].innerText;
    }
    document.location.assign(`/info/artist/${current}`);
}

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(findShows);
  } else {
    console.log("Geolocation is not supported or allowed.");
  }
}

const findShows =  async (position) => {
  const response = await fetch(`https://api.seatgeek.com/2/events?lat=${position.coords.latitude}&lon=${position.coords.longitude}&type=concert&client_id=MjUwMzA3ODd8MTYzOTc5ODE1MS45NDE3NTg2`);
  const data = await response.json();
  renderShows(data);
}

const renderShows = (data) => {
  for (let i = 0; i < data.events.length; i++) {
    console.log(data.events[i].title + ' at ' + data.events[i].venue.name + ' on ' + data.events[i].datetime_local);
    const artist = document.createElement('div')
      artist.innerText = data.events[i].title
    const venue = document.createElement('div')
      venue.innerText = data.events[i].venue.name
    const date = document.createElement('div')
      date.innerText = data.events[i].datetime_local 
    locationContainer.appendChild(artist);
    locationContainer.appendChild(venue);
    locationContainer.appendChild(date);
  }
}

getLocation();
const locationContainer = document.querySelector('#location-container');
document.querySelector('#top-artist-container').addEventListener('click', getInfo);
document.querySelector('#home-search-form').addEventListener('submit', search);