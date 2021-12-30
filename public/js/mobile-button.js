playSound = null;

function playAudio(url) {
    if (playSound) {
        playSound.pause();
        playSound = new Audio(url);
        playSound.play();
    } else {
        playSound = new Audio(url);
        playSound.play();
    }

}

function pauseAudio() {
    playSound.pause();
}