// logic for the favorite button
let btn = document.getElementById('favBtn');
let btn2 = document.getElementById('favBtn2');
let url = window.location.pathname;
let artist_id = url.replace(/^\D+/g, '');

// function to have favorite heart be active color if artist is in user's favorites
let getHeart = async () => {
    const response = await fetch('/api/artistfavorites', {
        method: 'GET',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
        if (data[i].artist_id == artist_id) {
            btn.classList.remove('deactive');
            btn.classList.add('active');
            btn2.classList.remove('deactive');
            btn2.classList.add('active');
        }
    }
};

// give Favorite Button red(active) color
let favBtnActive = function () {
    btn.classList.remove('deactive');
    btn.classList.add('active');
    btn2.classList.remove('deactive');
    btn2.classList.add('active');
};

// give favorite button grey(deactive) color
let favBtnDeactive = function () {
    btn.classList.remove('active');
    btn.classList.add('deactive');
    btn2.classList.remove('active');
    btn2.classList.add('deactive');
};

// add favorite artist
let addArtistFav = async () => {
    let artist_name = document.getElementById('name').textContent;
    await fetch('/api/artistfavorites', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artist_id: artist_id, artist_name: artist_name }),
    });
};

// delete favorite artist
let deleteArtistFav = async () => {
    let url = window.location.pathname;
    let artist_id = url.replace(/^\D+/g, '');
    await fetch('/api/artistfavorites', {
        method: 'DELETE',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artist_id }),
    });
};

if (btn) {
    btn2.addEventListener('click', function () {
        if (btn.classList.contains('active')) {
            favBtnDeactive();
            deleteArtistFav();
        } else {
            favBtnActive();
            addArtistFav();
        }
    });
}

// Gets saved concerts, checks displayed concerts against them, and updates button text accordingly
let getAttendedConcerts = async () => {
    if (btn) {
        const response = await fetch('/api/savedconcerts', {
            method: 'GET',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json',
            },
        });
        const attendedConcerts = await response.json();
        let attendedConcertsSimplified = [];
        attendedConcerts.forEach((element) => {
            attendedConcertsSimplified.push([element.venue_name, element.date]);
        });
        attendedConcertsSimplified = JSON.stringify(attendedConcertsSimplified);
        let buttonsArray = document.getElementById('recent-concerts-table').getElementsByTagName('button');
        for (let i = 0; i < buttonsArray.length; i++) {
            // If a green add button
            if (buttonsArray[i].dataset.attended === 'no') {
                // If the concert is found in the user's attended concerts
                if (attendedConcertsSimplified.includes(JSON.stringify([buttonsArray[i].parentElement.previousElementSibling.textContent.trim(), buttonsArray[i].previousElementSibling.textContent.trim()]))) {
                    buttonsArray[i].classList.add('hidden');
                }
            }
            // If a red remove button
            if (buttonsArray[i].dataset.attended === 'yes') {
                // If the concert is found in the user's attended concerts
                if (attendedConcertsSimplified.includes(JSON.stringify([buttonsArray[i].parentElement.previousElementSibling.textContent.trim(), buttonsArray[i].parentElement.firstElementChild.textContent.trim()]))) {
                    buttonsArray[i].classList.remove('hidden');
                }
            }
        }
    }
};

// Add concert to attended table
const addAttendedConcert = async (evt) => {
    let artist = document.getElementById('name').textContent.trim();
    let venue = evt.currentTarget.parentElement.previousElementSibling.textContent.trim();
    let date = evt.currentTarget.previousElementSibling.textContent.trim();
    let setlist_url = evt.currentTarget.previousElementSibling.href;
    evt.currentTarget.classList.add('hidden');
    evt.currentTarget.nextElementSibling.classList.remove('hidden');
    await fetch('/api/savedconcerts/', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artist_name: artist, venue_name: venue, date: date, setlist_url: setlist_url }),
    });
};

// Remove a concert from attended table
const removeAttendedConcert = async (evt) => {
    let artist = document.getElementById('name').textContent.trim();
    let venue = evt.currentTarget.parentElement.previousElementSibling.textContent.trim();
    let date = evt.currentTarget.parentElement.firstElementChild.textContent.trim();
    evt.currentTarget.classList.add('hidden');
    evt.currentTarget.previousElementSibling.classList.remove('hidden');
    await fetch('/api/savedconcerts/', {
        method: 'DELETE',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artist_name: artist, venue_name: venue, date: date }),
    });
};

// function to get tracklist from an album
const getTracks = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'album-card') {
        current = evt.target.childNodes[1].innerText;
    } else if (evt.target.id === 'album-picture' || evt.target.id === 'album-name') {
        current = evt.target.parentElement.childNodes[1].innerText;
    } else {
        return;
    }
    document.location.assign(`/info/album/${current}`);
};

// function to get a random recommended artist
const getRecommended = (evt) => {
    evt.preventDefault();
    let recommended = '';
    if (evt.target.id === 'artist-card') {
        recommended = evt.target.childNodes[1].innerText;
    } else if (evt.target.id === 'artist-img' || evt.target.id === 'artist-name') {
        recommended = evt.target.parentElement.childNodes[1].innerText;
    } else {
        return;
    }
    document.location.assign(`/info/artist/${recommended}`);
};

// code for the carousel display
document.querySelectorAll('.carousel').forEach((carousel) => {
    // sees how many items we have
    const items = carousel.querySelectorAll('.carousel-display-item');
    // creates a button for each item - should be able to generate off of our artist card
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });
    // insert buttons into html before end
    carousel.insertAdjacentHTML('beforeend',
    `<div class="carousel-navigation">
    ${buttonsHtml.join('')}
    </div> `);
    // select each button element
    const buttons = carousel.querySelectorAll('.carousel-button');
    // add event listener for each button
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            // un-select all the items
            items.forEach((item) => item.classList.remove('carousel-display-item-selected'));
            buttons.forEach((button) => button.classList.remove('carousel-button-selected'));
            items[i].classList.add('carousel-display-item-selected');
            button.classList.add('carousel-button-selected');
        });
    });

    // select the first item on the page on load
    items[0].classList.add('carousel-display-item-selected');
    buttons[0].classList.add('carousel-button-selected');
});

// buttons to link to pages
const discogWrap = document.querySelector('#discography-wrapper');
if (discogWrap) { discogWrap.addEventListener('click', getTracks) };
const recWrap = document.querySelector('#recommended-wrapper');
if (recWrap) { recWrap.addEventListener('click', getRecommended)};    

// Add listeners to each "I attended" button
const attendBtns = document.getElementById('recent-concerts-table');
if (attendBtns) {
    attendedButtons = attendBtns.getElementsByTagName('button');
    for (let i = 0; i < attendedButtons.length; i++) {
        if (attendedButtons[i].dataset.attended === 'no') {
            attendedButtons[i].addEventListener('click', addAttendedConcert);
        } else if (attendedButtons[i].dataset.attended === 'yes') {
            attendedButtons[i].addEventListener('click', removeAttendedConcert);
        }
    }
}

if (btn) {
    window.onload = getHeart();
    window.onload = getAttendedConcerts();
}