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
  d.getDay() +
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

//display banner if it's Friday
const banner = document.getElementById("pancakes");
if (d.getDay() == 5) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}
