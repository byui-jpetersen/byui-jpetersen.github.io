const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.1&lon=-111.88&units=imperial&exclude=minutely,hourly&appid=cd296ba4edb3930334e2b3b8876bb180';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('current').textContent = jsObject.current.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.current.temp.toFixed();
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('speed').textContent = jsObject.current.wind_speed.toFixed();

        const newDay = jsObject['daily'];
        const forecast = newDay.slice(1, 6);

        forecast.forEach(eachDay => {
            let data = document.createElement('div');
            let para1 = document.createElement('p');
            let image = document.createElement('img');

            image.setAttribute('src', 'https://openweathermap.org/img/w/${eachDay.weather[0].icon}.png');
            image.setAttribute('alt', '${eachDay.weather[0].description}');

            para1.innerHTML = '${eachDay.temp.day.toFixed(0)}&#8457;}';
            data.appendChild(para1);
            data.appendChild(image);

            document.querySelector('.newData').appendChild(data);
        })
    });
    

var day = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";

document.getElementById('tomorrow').innerHTML = weekday[(day.getDay() + 1) % 7];
document.getElementById('day2').innerHTML = weekday[(day.getDay() + 2) % 7];
document.getElementById('day3').innerHTML = weekday[(day.getDay() + 3) % 7];
document.getElementById('day4').innerHTML = weekday[(day.getDay() + 4) % 7];
document.getElementById('day5').innerHTML = weekday[(day.getDay() + 5) % 7];

const banner = document.getElementById("pancakes");
if (day.getDay() == 5) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}