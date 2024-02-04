var GCalURL = "calendar.google.com"
var URL = "";

function getURL(){
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    URL = String(tabs[0].url);
  });
}

function isGCalendar(url) {
  if (URL.includes(GCalURL)) {
    return true;
  }
  return false;
}


var boton = document.getElementById("botonClicar")
boton.addEventListener('click', () => {
  document.getElementById("URL").innerText = URL;
  console.log("Google: ", GCalURL);
  console.log("Actual: ", URL);
})

function changeColors() {
  rootElement = document.getElement;
  rootElement.style.setProperty('--surface', '#27374D');
}

document.addEventListener("DOMContentLoaded", () => {
  getURL();
  if (!isGCalendar(URL)) {
    document.getElementById("URL").innerText = "NOOO";
    return 0;
  } else {
    document.getElementById("URL").innerText = "SIII";
    changeColors();
  }
});