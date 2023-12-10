

// DOM Elements
const modalBackground = document.querySelector(".bground");
const formInputs = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");
const modalButtons = document.querySelectorAll(".modal-btn");
const conditionsAcceptedCheckbox = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");

/*Verification*/

if(lastNameInput == null) throw new Error("no lastNameInput found");
if(emailInput == null) throw new Error("no emailInput found");
if(birthdateInput == null) throw new Error("no birthdateInput found");
if(firstNameInput == null) throw new Error("No firstNameInput found");
if(closeModalButton == null) throw new Error("No close button found");
if(conditionsAcceptedCheckbox == null) throw new Error("no checkbox found");

/*Appel aux évenements*/

firstNameInput.addEventListener("invalid",(e) => flashErrorMessage(e, "Veuillez entrer 2 caractères ou plus pour le champ prénom"));
lastNameInput.addEventListener("invalid",(e) => flashErrorMessage(e, "Veuillez entrer 2 caractères ou plus pour le champ nom"));
emailInput.addEventListener("invalid",(e) => flashErrorMessage(e, "Veuillez entrer une adresse email valide"));
birthdateInput.addEventListener("invalid",(e) => flashErrorMessage(e, "Vous devez entrer votre date de naissance"));


conditionsAcceptedCheckbox.addEventListener("change", checkIfConditionsAccepted);

// launch modal event
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalButton.addEventListener("click",closeModal);


// déclaration des fonctions
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

function flashErrorMessage(event, message) {
  const target = event.target;
  const parent = target.parentElement;

  parent.setAttribute("data-error", message);
  parent.setAttribute("data-error-visible", "true");
  setTimeout(removeErrorMessage,5000);
}
function removeErrorMessage() {
  const errorMessage = document.querySelectorAll("[data-error-visible]");
  errorMessage.forEach((errorMessage) => {
    errorMessage.removeAttribute("data-error");
    errorMessage.removeAttribute("data-error-visible");
  });
}


