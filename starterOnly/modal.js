

// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");

if(closeModalButton == null) throw new Error("No close button found");

// launch modal event
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalButton.addEventListener("click",closeModal);

function closeModal() {
  if(modalBackground == null) throw new Error("No modal background found");
  modalBackground.classList.remove("active");
}

// launch modal form
function launchModal() {
  if(modalBackground == null) throw new Error("No modal background found");
  modalBackground.classList.add("active");


}

function editNav() {
  const topNavbar = document.getElementById("myTopnav");
  if(topNavbar == null) throw new Error("No topNavbar found");
  topNavbar.classList.toggle("responsive");
  
}


