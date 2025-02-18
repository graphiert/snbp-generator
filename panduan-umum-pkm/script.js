let player;
let isPlaying = false;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    videoId: 'MkQeQYvcsbo',
    playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'modestbranding': 1 },
    events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }
  });
}
function onPlayerReady(event) {
  const videoData = player.getVideoData();
  let title = videoData.title || "Unknown Title";
  if (title.length > 27) {
    title = title.substring(0, 27) + "...";
  }
  document.getElementById('title').textContent = title;
  document.getElementById("thumbnail").src = "https://img.youtube.com/vi/" + videoData.video_id + "/default.jpg";
  updateDuration();
  setInterval(updateTime, 500);
  setTimeout(togglePlay, 2000);
}
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    isPlaying = false;
    document.getElementById("play-pause").textContent = "▶";
  }
}
function togglePlay() {
  if (isPlaying) {
    player.pauseVideo();
    document.getElementById("play-pause").textContent = "▶";
  } else {
    player.playVideo();
    document.getElementById("play-pause").textContent = "⏸";
  }
  isPlaying = !isPlaying;
}
function updateDuration() {
  let duration = player.getDuration();
  document.getElementById("duration").textContent = formatTime(duration);
  document.getElementById("seek-bar").max = duration;
}
function updateTime() {
  let currentTime = player.getCurrentTime();
  document.getElementById("current-time").textContent = formatTime(currentTime);
  document.getElementById("seek-bar").value = currentTime;
}
function seekAudio(event) {
  let newTime = event.target.value;
  player.seekTo(newTime, true);
}
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return min + ":" + (sec < 10 ? "0" : "") + sec;
}
document.getElementById("play-pause").addEventListener("click", togglePlay);
document.getElementById("seek-bar").addEventListener("input", seekAudio);
