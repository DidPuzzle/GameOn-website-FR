

// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");
const conditionsAcceptedCheckbox = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");


if(closeModalButton == null) throw new Error("No close button found");
if(conditionsAcceptedCheckbox == null) throw new Error("no checkbox found");

conditionsAcceptedCheckbox.addEventListener("change", checkIfConditionsAccepted);

// launch modal event
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalButton.addEventListener("click",closeModal);

function checkIfConditionsAccepted(event){
  if(submitButton == null) throw new Error("No submit-button found");
  const isChecked = event.target.checked;
  if(isChecked) return submitButton.removeAttribute("disabled");
  submitButton.setAttribute("disabled","true");
  
}

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


