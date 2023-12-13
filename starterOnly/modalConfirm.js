
// Constante : 
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const btnCloseConfirm = document.querySelector(".btn-close-confirm");
const form = document.querySelector('form');


// Fonction pour ouvrir la modale de confirmation d'inscription :

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    
    if(firstNameControle() && lastNameControle() && emailControle() && birthdateControle() && quantityControle() && checkboxLocationControl() && conditionCheckboxControle()){
        modalConfirmation.style.display = "block";
        form.style.display = 'none';
    } 
})


// Fonction pour fermer la modale de confirmation d'inscription

btnCloseConfirm.addEventListener("click", () => {
    window.location.reload();
});
