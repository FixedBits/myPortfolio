// Disable right-click
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// Reduce video playback speed by half
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('card-video');
  if (video) {
    video.playbackRate = 0.5;
  }
});

// Set the text content of the element with id "year" to the current year
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('dark-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Explicitly check the class and set the text to else
  if (document.body.classList.contains('dark-mode')) {
    this.textContent = 'Day Mode';
  } else {
    this.textContent = 'Dark Mode';
  }
});
