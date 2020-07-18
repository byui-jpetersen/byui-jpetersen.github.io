const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const southern = towns.filter((town) => town.name == document.querySelector("span#townName").innerText);

    let eachTown = document.createElement("article");
    let h3 = document.createElement("h3");
    let p1 = document.createElement("p");

    eachTown.appendChild(p1);

    h3.innerHTML = `Upcoming Events`;
    p1.appendChild(h3);

    southern[0].events.forEach((events) => {
      let p2 = document.createElement("p");

      p2.innerHTML = `${events}`;
      p1.appendChild(p2);

      
    });
    document.querySelector("section.events").appendChild(eachTown);
  });
