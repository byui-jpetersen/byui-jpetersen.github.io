//get lasted date it was updated and populate the tag with the lastupdatedate ID
const d = new Date();
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("currentdate").innerHTML =
  day[d.getDay()] +
  ", " +
  d.getDate() +
  " " +
  months[d.getMonth()] +
  " " +
  d.getFullYear();

//get current year for copyright
document.getElementById("currentyear").textContent = new Date().getFullYear();

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}



