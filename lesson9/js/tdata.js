const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    const southern = towns.filter(
      (town) =>
        town.name == "Preston" ||
        town.name == "Fish Haven" ||
        town.name == "Soda Springs"
    );

    southern.forEach((town) => {
      let eachTown = document.createElement("article");
      let townData = document.createElement("section");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let para1 = document.createElement("p");
      let para2 = document.createElement("p");
      let para3 = document.createElement("p");
      let image = document.createElement("img");

      eachTown.appendChild(townData);

      h2.innerHTML = "${town.name}";
      townData.appendChild(h2);

      h3.innerHTML = "${town.motto}";
      townData.appendChild(h3);

      para1.innerHTML = "Year Founded: ${town.yearFounded}";
      townData.appendChild(para1);

      para2.innerHTML = "Population: ${town.currentPopulation}";
      townData.appendChild(para2);

      para3.innerHTML = "Annual Rain Fall: ${town.averageRainfall}";
      townData.appendChild(para3);

      image.setAttribute("src", "images/${town.photo}");
      image.setAttribute("alt", "${town.name}: ${town.motto}");
      eachTown.appendChild(image);

      document.querySelector("section.town-info").appendChild(eachTown);
    });
  });
