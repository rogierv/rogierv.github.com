// Get the modal
var modalChess = document.getElementById('modal-chess');
var modalSki = document.getElementById('modal-ski');
var modalCook = document.getElementById('modal-cook');
var modalHike = document.getElementById('modal-hike');

// Get the button that opens the modal
var btnChess = document.getElementById("hobby-item-chess");
var btnSki = document.getElementById("hobby-item-ski");
var btnCook = document.getElementById("hobby-item-cook");
var btnHike = document.getElementById("hobby-item-hike");

// When the user clicks on the button, open the modal 
btnChess.onclick = function () {
  modalChess.style.display = "block";
}
btnSki.onclick = function () {
  modalSki.style.display = "block";
}
btnCook.onclick = function () {
  modalCook.style.display = "block";
}
btnHike.onclick = function () {
  modalHike.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalChess ||
      event.target == modalSki ||
      event.target == modalCook ||
      event.target == modalHike) {
    modalChess.style.display = "none";
    modalSki.style.display = "none";
    modalCook.style.display = "none";
    modalHike.style.display = "none";
  }
}