//get lasted date it was updated and populate the tag with the lastupdatedate ID
let oLastModif = new Date(document.lastModified)
document.getElementById("lastupdatedate").textContent = oLastModif;