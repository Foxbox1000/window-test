let spencer = window.open("https://maps.triangledayschool.com/spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0,alwaysOnTop=true');

setInterval(function() {
  if (localStorage.getItem("activated") === "false") {
    window.close();
  } else if (spencer.closed) {
    spencer = window.open("https://maps.triangledayschool.com/spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0,alwaysOnTop=true');
    if (document.hidden) {
      setTimeout(window.close, 10);
    };
  } else if (!window.opener) {
    window.open("https://maps.triangledayschool.com/map/");
    setTimeout(window.close(), 10);
    setTimeout(spencer.close(), 5);
  };
}, 50);
