//get lasted date it was updated and populate the tag with the lastupdatedate ID
let oLastModif = new Date(document.lastModified)
document.getElementById("lastupdatedate").textContent = oLastModif;

//get current year for copyright
document.getElementById("currentyear").textContent = new Date().getFullYear();

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);