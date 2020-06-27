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
      let townData = document.createElement("div");
      let tname = document.createElement("h2");
      let tmotto = document.createElement("h3");
      let founded = document.createElement("p");
      let population = document.createElement("p");
      let rainfall = document.createElement("p");
      let image = document.createElement("img");

      eachTown.appendChild(townData);

      tname.innerHTML = town.name;
      townData.appendChild(tname);

      tmotto.innerHTML = town.motto;
      townData.appendChild(tmotto);

      founded.innerHTML = "Year Founded: " + town.yearFounded;
      townData.appendChild(founded);

      population.innerHTML = "Population: " + town.currentPopulation;
      townData.appendChild(population);

      rainfall.innerHTML = "Annual Rain Fall: " + town.averageRainfall;
      townData.appendChild(rainfall);

      image.setAttribute("src", "images/" + town.photo);
      image.setAttribute("alt", town.name + ": " + town.motto);
      image.setAttribute("class", "townimages")
      eachTown.appendChild(image);

      document.querySelector("section.towndetails").appendChild(eachTown);
      eachTown.setAttribute("class", "townArticles");
      townData.setAttribute("class", "townSections");
    });
  });
