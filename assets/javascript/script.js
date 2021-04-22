// Function expression to select elements.
const selectElement = (s) => document.querySelector(s);

//Open the menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//Close the menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}
function stopVideo() {
  videoPlayer.style.display = "none";
}
