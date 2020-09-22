var mediaPlayer;
var progressBar;


document.addEventListener('DOMContentLoaded', function() {
    initPlayer();
    
}, false);

function initPlayer() {
    mediaPlayer = document.getElementById('COMMITMENT');
    progressBar = document.getElementById('progressBar');

}

function toggleVideo() {
    var btn = document.getElementById('play-pause-btn');
    if (mediaPlayer.paused || mediaPlayer.ended) {
        btn.innerHTML = "Pause Video";
        mediaPlayer.play();
        
    } else {
        btn.innerHTML = "Play Video";
        mediaPlayer.pause();

    }

}

function stopVideo() {
    mediaPlayer.pause();
    mediaPlayer.currentTime = 0;
    document.getElementById('play-pause-btn').innerHTML = "Play Video"

}