let btn = document.getElementById('favBtn');

let favBtnActive = function () {
    btn.classList.remove('deactive');
    btn.classList.add('active');
}

let favBtnDeactive = function () {
    btn.classList.remove('active');
    btn.classList.add('deactive');
}

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

btn.addEventListener('click', function () {
    if (btn.classList.contains('active')) {
        favBtnDeactive();
    } else {
        favBtnActive();
        postDB();
    }
});