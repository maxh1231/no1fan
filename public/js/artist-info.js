// logic for the favorite button
let btn = document.getElementById('favBtn');
let url = window.location.pathname;
let artist_id = url.replace(/^\D+/g, '');

// function to have favorite heart be active color if artist is in user's favorites
let getHeart = async (req, res) => {
    const response = await fetch('/api/artistfavorites', {
        method: 'GET',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
    });
    const getData = await response.json();
    for (var i = 0; i < getData.length; i++) {
        if (getData[i].artist_id == artist_id) {
            btn.classList.remove('deactive');
            btn.classList.add('active');
        }
    }
};

// give Favorite Button red(active) color
let favBtnActive = function () {
    btn.classList.remove('deactive');
    btn.classList.add('active');
};

// give favorite button grey(deactive) color
let favBtnDeactive = function () {
    btn.classList.remove('active');
    btn.classList.add('deactive');
};

// add favorite artist
let addArtistFav = async (req, res) => {
    let artist_name = document.getElementById('name').textContent;
    const response = await fetch('/api/artistfavorites', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            artist_id: artist_id,
            artist_name: artist_name,
        }),
    });
    const postData = await response.json();
    console.log(postData);
};

// delete favorite artist
let deleteArtistFav = async (req, res) => {
    let url = window.location.pathname;
    let artist_id = url.replace(/^\D+/g, '');
    const response = await fetch('/api/artistfavorites', {
        method: 'DELETE',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            artist_id,
        }),
    });
    const postData = await response.json();
    console.log(postData);
};

if (btn) {
    btn.addEventListener('click', function () {
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
let getAttendedConcerts = async (req, res) => {
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
    console.log(attendedConcertsSimplified);
    attendedConcertsSimplified = JSON.stringify(attendedConcertsSimplified);
    let buttonsArray = document
        .getElementById('recent-concerts-table')
        .getElementsByTagName('button');
    for (let i = 0; i < buttonsArray.length; i++) {
        if (
            attendedConcertsSimplified.includes(
                JSON.stringify([
                    buttonsArray[
                        i
                    ].parentElement.previousElementSibling.textContent.trim(),
                    buttonsArray[i].previousElementSibling.textContent.trim(),
                ])
            )
        ) {
            buttonsArray[i].innerHTML = "Oops. I didn't!";
        }
    }
};

// Routes to either add or remove concert
const concertRouter = function (evt) {
    if (evt.target.innerHTML === 'I attended this show!') {
        return addAttendedConcert(evt);
    } else {
        return removeAttendedConcert(evt);
    }
};

// Add concert to attended table
const addAttendedConcert = async (evt) => {
    if (evt.target.tagName === 'BUTTON') {
        let artist = document.getElementById('name').textContent.trim();
        let venue =
            evt.target.parentElement.previousElementSibling.textContent.trim();
        let date = evt.target.previousElementSibling.textContent.trim();
        let setlist_url = evt.target.previousElementSibling.href;
        console.log(artist, venue, date, setlist_url);
        const response = await fetch('/api/savedconcerts/', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                artist_name: artist,
                venue_name: venue,
                date: date,
                setlist_url: setlist_url,
            }),
        });
        const postData = await response.json();
        console.log(postData);
        evt.target.innerHTML = "Oops. I didn't!";
    }
};

// Remove a concert from attended table
const removeAttendedConcert = async (evt) => {
    if (evt.target.tagName === 'BUTTON') {
        let artist = document.getElementById('name').textContent.trim();
        let venue =
            evt.target.parentElement.previousElementSibling.textContent.trim();
        let date = evt.target.previousElementSibling.textContent.trim();
        console.log(artist, venue, date);
        const response = await fetch('/api/savedconcerts/', {
            method: 'DELETE',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                artist_name: artist,
                venue_name: venue,
                date: date,
            }),
        });
        const postData = await response.json();
        console.log(postData);
        evt.target.innerHTML = 'I attended this show!';
    }
};

// function to get tracklist from an album
const getTracks = (evt) => {
    evt.preventDefault();
    let current = '';
    if (evt.target.id === 'album-card') {
        current = evt.target.childNodes[1].innerText;
    } else if (
        evt.target.id === 'album-picture' ||
        evt.target.id === 'album-name'
    ) {
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
    if (evt.target.id === 'recommended-artist-card') {
        recommended = evt.target.childNodes[1].innerText;
    } else if (
        evt.target.id === 'recommended-artist-img' ||
        evt.target.id === 'recommended-artist-name'
    ) {
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
    carousel.insertAdjacentHTML(
        'beforeend',
        `
    <div class="carousel-navigation">
    ${buttonsHtml.join('')}
    </div>
    `
    );
    // select each button element
    const buttons = carousel.querySelectorAll('.carousel-button');
    // add event listener for each button
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            // un-select all the items
            items.forEach((item) =>
                item.classList.remove('carousel-display-item-selected')
            );
            buttons.forEach((button) =>
                button.classList.remove('carousel-button-selected')
            );

            items[i].classList.add('carousel-display-item-selected');
            button.classList.add('carousel-button-selected');
        });
    });

    // select the first item on the page on load
    items[0].classList.add('carousel-display-item-selected');
    buttons[0].classList.add('carousel-button-selected');
});

// buttons to link to pages
document
    .querySelector('#discography-wrapper')
    .addEventListener('click', getTracks);
document
    .querySelector('#recommended-wrapper')
    .addEventListener('click', getRecommended);

// Add listeners to each "I attended" button
document
    .getElementById('recent-concerts-table')
    .addEventListener('click', concertRouter);

window.onload = getHeart();
window.onload = getAttendedConcerts();
