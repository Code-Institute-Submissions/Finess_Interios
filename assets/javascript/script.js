var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
}
function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
