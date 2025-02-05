// Disable right-click
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// Reduce video playback speed by half
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('card-video');
  if (video) {
    video.playbackRate = 0.5;
  }
});

// Set the text content of the element with id "year" to the current year
document.getElementById('year').textContent = new Date().getFullYear();
