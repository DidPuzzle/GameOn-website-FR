

// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButttons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");

// launch modal event
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {

  modalBackground.style.display = "block";
}

function editNav() {
  const topNavbar = document.getElementById("myTopnav");
  if(topNavbar == null) throw new Error("No topNavbar found");
  topNavbar.className.toggle("responsive");
  
}


