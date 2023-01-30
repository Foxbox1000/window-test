var elem = document.documentElement;
setInterval(function() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  }
}, 50);
document.addEventListener("keydown", function(event) {
  if (event.code === "Escape") {
    window.open("https://google.com", "_blank");
  }
});
