let btn = document.getElementById('favBtn');
let btn2 = document.getElementById('favBtn2');
let url = window.location.pathname;
let album_id = url.replace(/^\D+/g, '')

let getFav = async (req, res) => {
    const response = await fetch('/api/albumfavorites', {
        method: 'GET',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json',
        },
    });
    const getData = await response.json();
    for (var i = 0; i < getData.length; i++) {
        if (getData[i].album_id == album_id) {
            btn.classList.remove('deactive');
            btn.classList.add('active');
            btn2.classList.remove('deactive');
            btn2.classList.add('active');
        }
    }
}

// give Favorite Button red(active) color
let favBtnActive = function () {
    btn.classList.remove('deactive');
    btn.classList.add('active');
    btn2.classList.remove('deactive');
    btn2.classList.add('active');
}

// give Favorite Button grey(deactive) color
let favBtnDeactive = function () {
    btn.classList.remove('active');
    btn.classList.add('deactive');
    btn2.classList.remove('active');
    btn2.classList.add('deactive');
}
// Post favorite
let postDB = async (req, res) => {
    let url = window.location.pathname;
    let album_id = url.replace(/^\D+/g, '')
    let album_name = document.getElementById('title').textContent;
    const response = await fetch('/api/albumfavorites', {
        method: 'POST',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            album_id: album_id,
            album_name: album_name,
        })
    });
    const postData = await response.json();
    console.log(postData);
}
// Delete favorite
let deleteDB = async (req, res) => {
    let url = window.location.pathname;
    let album_id = url.replace(/^\D+/g, '')
    const response = await fetch('/api/albumfavorites', {
        method: 'DELETE',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            album_id,
        })
    });
    const postData = await response.json();
    console.log(postData);
}

btn2.addEventListener('click', function () {
    if (btn.classList.contains('active')) {
        favBtnDeactive();
        deleteDB();
    } else {
        favBtnActive();
        postDB();
    }
});

window.onload = getFav();