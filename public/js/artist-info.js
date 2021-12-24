// function to get tracklist from an album 
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

// function to get a random recommended artist
const getRecommended = (evt) => {
    evt.preventDefault();
    let recommended = '';
    if (evt.target.id === 'recommended-artist-card') {
        recommended = evt.target.childNodes[1].innerText;
        
        
    } else {
        recommended = evt.target.parentElement.childNodes[1].innerText
    }
    document.location.assign(`/info/artist/${recommended}`);
    
}

// code for the carousel display
document.querySelectorAll(".carousel").forEach((carousel) => {
    // sees how many items we have 
    const items = carousel.querySelectorAll(".carousel-display-item");
    // creates a button for each item - should be able to generate off of our artist card 
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel-button"></span>`;
    });
    // insert buttons into html before end 
    carousel.insertAdjacentHTML('beforeend', `
    <div class="carousel-navigation">
    ${ buttonsHtml.join("") }
    </div>
    `);
    // select each button element 
const buttons = carousel.querySelectorAll('.carousel-button');
// add event listener for each button 
buttons.forEach((button, i) => {
button.addEventListener("click", () => {
    // un-select all the items
    items.forEach(item => item.classList.remove("carousel-display-item-selected"));
    buttons.forEach(button => button.classList.remove("carousel-button-selected"));

    items[i].classList.add('carousel-display-item-selected');
    button.classList.add("carousel-button-selected");
});
});





// select the first item on the page on load 
items[0].classList.add('carousel-display-item-selected');
    buttons[0].classList.add("carousel-button-selected");
});




document.querySelector('#discography-wrapper').addEventListener('click', getTracks);
document.querySelector('#recommended-wrapper').addEventListener('click', getRecommended);