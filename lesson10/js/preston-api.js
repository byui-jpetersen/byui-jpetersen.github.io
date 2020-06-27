const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.09&lon=-111.88&units=imperial&exclude=minutely,hourly&appid=cd296ba4edb3930334e2b3b8876bb180';
var day = new Date();
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
        document.getElementById('currently').textContent = jsObject.current.weather[0].description;
        document.getElementById('hightemp').textContent = jsObject.daily[0].temp.max.toFixed();
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('speed').textContent = jsObject.current.wind_speed.toFixed();
        const newDay = jsObject['daily'];
        const forecast = newDay.slice(1, 6);
        forecast.forEach(eachDay => {
            let data = document.createElement('div');
            data.setAttribute('class', 'fiveday');
            let day = document.createElement('div');
            let temp = document.createElement('div');
            let image = document.createElement('img');
            let newDay= new Date(eachDay.dt * 1000);
            day.setAttribute('class', weekday[newDay.getDay() % 7]);
            day.innerHTML = weekday[newDay.getDay() % 7];
            image.setAttribute('src', `https://openweathermap.org/img/w/${eachDay.weather[0].icon}.png`);
            image.setAttribute('alt', `${eachDay.weather[0].description}`);
            image.setAttribute('class', 'forecastimgs');
            temp.setAttribute('class', 'fivedaytemp');
            temp.innerHTML = `${eachDay.temp.day.toFixed(0)}&#8457;`;
            data.appendChild(day);
            data.appendChild(image);
            data.appendChild(temp);
            document.querySelector('.forecastcontainer').appendChild(data);
        })
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