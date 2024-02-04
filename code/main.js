function test(){
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    document.getElementById("URL").innerText = url;
  });
}


var boton = document.getElementById("botonClicar")
boton.addEventListener('click', test)