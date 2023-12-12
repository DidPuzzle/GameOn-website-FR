 //Déclaration de mes variables first et firstNameError :
 let firstName = document.querySelector("#first");
 let firstNameError = document.querySelector("#firstNameError");
 

 //Condition regex pour le contrôle du champs firstName :
 function firstNameControle () {     
     
     if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(firstName.value)) {
         firstName.style.border = "solid 2px green";
         firstNameError.textContent = "Champ Valide";
         firstNameError.style.color = 'green';
         firstNameError.style.fontSize = '15px';
         firstNameError.style.marginBottom = '5px';
         return true;
     } 
                     
     else {
         firstName.style.border = "solid 2px red";
         firstNameError.textContent = "Veuillez rentrer 2 caractères ou plus pour le champ prénom";
         firstNameError.style.color = 'red';
         firstNameError.style.fontSize = '15px';
         firstNameError.style.marginBottom = '5px';
         return false;
     }
             
 }

 //AddEventListener pour le controle de l'input firstName :
 firstName.addEventListener('change', () => {
     firstNameControle();
 });


 //Déclaration de mes variable lastName et lastNameError :
 let lastName = document.querySelector("#last");
 let lastNameError = document.querySelector("#lastNameError");

 
 //Condition regex pour le contrôle du champs lastName :
 function lastNameControle () {     

     if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(lastName.value)) {
         lastName.style.border = "solid 2px green";
         lastNameError.textContent = "Champ Valide";
         lastNameError.style.color = 'green';
         lastNameError.style.fontSize = '15px';
         lastNameError.style.marginBottom = '5px';
         return true;
     } 
                             
     else {
         lastName.style.border = "solid 2px red";
         lastNameError.textContent = "Veuillez rentrer 2 caractères ou plus pour le champ nom";
         lastNameError.style.color = 'red';
         lastNameError.style.fontSize = '15px';
         lastNameError.style.marginBottom = '5px';
         return false;
     }
                     
 }

 
 //AddEventListener pour le controle de l'input lastName :
 lastName.addEventListener('change', () => {
     lastNameControle();
 });

     
 //Déclaration de mes variables email et emailError :
 let email = document.querySelector("#email");
 let emailError = document.querySelector("#emailError");

 
 //Condition regex pour le contrôle du champs email :
 function emailControle () {     
         
     if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
         email.style.border = "solid 2px green";
         emailError.textContent = "Champ Valide";
         emailError.style.fontSize = '15px';
         emailError.style.color = 'green';
         emailError.style.marginBottom = '5px';
         return true;
     } 
                     
     else {
         email.style.border = "solid 2px red";
         emailError.textContent = "Veuillez rentrer une adresse email valide";
         emailError.style.fontSize = '15px';
         emailError.style.color = 'red';
         emailError.style.marginBottom = '5px';
         return false;
     }                
 }

 
 //AddEventListener pour le controle de l'input email :
 email.addEventListener('change', () => {
     emailControle();
 });


 //Déclaration de mes variables birthdate et birthdateError :
 let birthdate = document.querySelector("#birthdate");
 let birthdateError = document.querySelector("#birthdateError");


 //Condition regex pour le contrôle du champs date :
 function birthdateControle () {     
         
     if (/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(birthdate.value)) {
         birthdate.style.border = "solid 2px green";
         birthdateError.textContent = "Champ Valide";
         birthdateError.style.fontSize = '15px';
         birthdateError.style.marginBottom = '10px';
         birthdateError.style.color = 'green';
         return true;
     } 
         
     else {
         birthdate.style.border = "solid 2px red";
         birthdateError.textContent = "Vous devez entrer votre date de naissance.";
         birthdateError.style.fontSize = '15px';
         birthdateError.style.marginBottom = '10px';
         birthdateError.style.color = 'red';
         return false;
     }
                 
 }

  //AddEventListener pour le controle de l'input birthdate :
  birthdate.addEventListener('change', () => {
     birthdateControle();
 });

 
 //Déclaration de mes constantes quantity et quantityError :
 let quantity = document.querySelector("#quantity");
 let quantityError = document.querySelector("#quantityError");

 //Condition regex pour le contrôle du champs quantity :
 function quantityControle () {     
             
     if (quantity.value > 0) {
        quantity.style.border = "solid 2px green";
         quantityError.textContent = "Champ Valide";
         quantityError.style.color = "green";
         quantityError.style.fontSize = "15px";
         quantityError.style.marginBottom = '10px';
         return true;
     }
     
                     
     else {
         quantity.style.border = "solid 2px red";
         quantityError.textContent = "Merci d'indiquer le nombre de tournois";
         quantityError.style.fontSize = '15px';
         quantityError.style.marginBottom = '10px';
         quantityError.style.color = 'red';
         return false;
     }
 }  



  //AddEventListener pour le controle de l'input quantity :
 quantity.addEventListener('change', () => {
     quantityControle();
 });

  //Déclaration de mes variables location et locationError :
  let checkLocation = document.getElementsByName("location");
  let locationError = document.querySelector("#locationError");

  
 //Condition pour le contrôle du champs check-box location :
  function checkboxLocationControl() {

     for(let i = 0; i < checkLocation.length; i++) {

       if(checkLocation[i].checked) {
         locationError.textContent ='option validée';
         locationError.style.color = 'green';
         locationError.style.fontSize = '15px';
         locationError.style.marginBottom = '10px';
         return true;
       }

     }

     locationError.textContent ='vous devez choisir une option';
     locationError.style.color = 'red';
     locationError.style.fontSize = '15px';
     locationError.style.marginBottom = '10px';
     return false;

   }

 
   //AddEventListener pour le controle de l'input checkLocation :
   checkLocation.forEach((chekLocationInput) => chekLocationInput.addEventListener('change', function() {
     checkboxLocationControl(); 
   }));
   

 //Déclaration de mes variables checkbox1 et generalCheckboxError :
 let checkbox1 = document.querySelector("#checkbox1");
 let conditionCheckboxError = document.querySelector("#generalCheckboxError");

 
 //Condition pour le contrôle du champs checkbox :
 function conditionCheckboxControle() {
     if(checkbox1.checked ) {                  
         checkbox1.style.border = "solid 2px green";
         conditionCheckboxError.textContent = "Champs Valide";
         conditionCheckboxError.style.color = "green";
         conditionCheckboxError.style.fontSize = "15px";
         conditionCheckboxError.style.marginBottom = '10px';
         return true;

     } else {
         checkbox1.style.border = "solid 2px red";
         conditionCheckboxError.textContent = "Vous dever accepter les conditions d'utilisation";
         conditionCheckboxError.style.fontSize = '15px';
         conditionCheckboxError.style.marginBottom = '10px';
         conditionCheckboxError.style.color = 'red';
         return false;
     }
 };


 //AddEventListener pour le controle de l'input checkbox1 :
 checkbox1.addEventListener('change', () => {
     conditionCheckboxControle();
 });

