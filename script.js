
function playSound(key) {
   
    const audio = document.querySelector(`audio[data-key="${key.toUpperCase()}"]`);
    const selector = key === ' ' ? 'div.drum-pad[data-key=" "]' : `div.drum-pad[data-key="${key.toUpperCase()}"]`;
    const drumPad = document.querySelector(selector);

    if (!audio) return;

    audio.currentTime = 0; 
    audio.play();

    if (drumPad) {
        drumPad.classList.add('playing');
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    this.classList.remove('playing');
}

window.addEventListener('keydown', (e) => {
    let keyToPlay = e.key.toUpperCase();

    if (e.code === 'Space') {
        keyToPlay = ' ';
        e.preventDefault();
    }

    playSound(keyToPlay);
});

const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach(pad => {
    pad.addEventListener('click', () => {
        const key = pad.getAttribute('data-key');
        playSound(key);
    });
    pad.addEventListener('transitionend', removeTransition);
});