// Get video and button elements
const video = document.getElementById("myVideo");
const pauseBtn = document.getElementById("pauseBtn");
const playBtn = document.getElementById("playBtn");
const resumeBtn = document.getElementById("resumeBtn");
const restartBtn = document.getElementById("restartBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

// Event listeners for buttons
pauseBtn.addEventListener('click', () => video.pause());
playBtn.addEventListener('click', () => video.play()); 
resumeBtn.addEventListener('click', () => video.play());
restartBtn.addEventListener('click', () => {
    video.currentTime = 0;
    video.play();
});

fullscreenBtn.addEventListener('click', () => {video.requestFullscreen();});
