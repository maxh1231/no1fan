playSound = null;

function playAudio(url) {
    playSound = new Audio(url);
    playSound.play();
}

function pauseAudio() {
    playSound.pause();
}