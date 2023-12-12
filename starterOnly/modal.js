// Constante :
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

// Fonction pour ouvrire la modale :

modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));

// Fonction pour fermer la modale

closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none"; 
});


// Fonction Responsive Navbar : 
const editNav = () => {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



