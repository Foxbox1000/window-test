addEventListener("click", function() {
  var popup = window.open("https://foxbox1000.github.io/window-test/window/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysOnTop=true,fullscreen=yes');
  setTimeout(function() {
    popup.document.documentElement.requestFullscreen();
  }, 2000);
});
