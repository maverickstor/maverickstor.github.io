const audio = document.getElementById('audio');
const musicList = document.getElementById('music-list');

musicList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        const src = e.target.getAttribute('data-src');
        audio.src = src;
        audio.play();
    }
});