const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=42.04&lon=-111.40&units=imperial&appid=cd296ba4edb3930334e2b3b8876bb180";
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const fivedayforecast = jsObject.list.filter((f) =>
      f.dt_txt.includes("18:00:00")
    );
    document.getElementById("currently").textContent =
      fivedayforecast[0].weather[0].description;
    document.getElementById(
      "hightemp"
    ).textContent = fivedayforecast[0].main.temp_max.toFixed();
    document.getElementById("humidity").textContent =
      fivedayforecast[0].main.humidity;
    document.getElementById(
      "speed"
    ).textContent = fivedayforecast[0].wind.speed.toFixed();
    const newDay = jsObject["daily"];
    fivedayforecast.forEach((eachDay) => {
      let d = new Date(eachDay.dt_txt);
      let data = document.createElement("div");
      data.setAttribute("class", "fiveday");
      let day = document.createElement("div");
      let temp = document.createElement("div");
      let image = document.createElement("img");
      day.setAttribute("class", weekday[d.getDay() % 7]);
      day.innerHTML = weekday[d.getDay() % 7];
      image.setAttribute(
        "src",
        `https://openweathermap.org/img/w/${eachDay.weather[0].icon}.png`
      );
      image.setAttribute("alt", `${eachDay.weather[0].description}`);
      image.setAttribute("class", "forecastimgs");
      temp.setAttribute("class", "fivedaytemp");
      temp.innerHTML = `${eachDay.main.temp.toFixed(0)}&#8457;`;
      data.appendChild(day);
      data.appendChild(image);
      data.appendChild(temp);
      document.querySelector(".forecastcontainer").appendChild(data);
    });
  });
const banner = document.getElementById("pancakes");
if (day.getDay() == 5) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
