var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}
function stopVideo() {
  videoPlayer.style.display = "none";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
