// Disable right-click (testing this feature)
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Reduce video playback speed by half
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("card-video");
  if (video) {
    video.playbackRate = 0.5;
  }
});

// Set the text content of the element with id "year" to the current year
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const darkMode = localStorage.getItem("dark-mode");

  // Check if "dark-mode" is active and apply it
  if (darkMode === "active") {
    document.body.classList.add("dark-mode");
  }

  // Event listener for the dark-mode toggle button
  document.getElementById("dark-mode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "active");
    } else {
      localStorage.removeItem("dark-mode"); // Remove it if dark mode is disabled
    }
  });
});
