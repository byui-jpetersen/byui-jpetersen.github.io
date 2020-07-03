const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const southern = towns.filter((town) => town.name == "Soda Springs");

    southern.forEach((town) => {
      let eachTown = document.createElement("article");
      let h3 = document.createElement("h3");
      let p1 = document.createElement("div");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      eachTown.appendChild(p1);

      h3.innerHTML = `Upcoming Events`;
      p1.appendChild(h3);

      p2.innerHTML = `${town.events[0]}`;
      p1.appendChild(p2);

      p3.innerHTML = `${town.events[1]}`;
      p1.appendChild(p3);

      p4.innerHTML = `${town.events[2]}`;
      p1.appendChild(p4);

      document.querySelector("section.sodaspringsevents").appendChild(eachTown);
    });
  });
