console.log("page loaded...");

function preview(element) {
  element.play();
}

function stopPreview(element) {
  element.pause();
}
var video = document.getElementById("video");

function playMovie(element) {
  element.play();
  console.log(video);
  document.getElementById("video").muted = false;
}
