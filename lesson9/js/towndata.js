const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];

      const southern = towns.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));

      southern.forEach(town => {

        let eachTown = document.createElement('article');
        let townData = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('h3');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainFall = document.createElement('p');
        let image = document.createElement('img');

        eachTown.appendChild(townData);
        eachTown.appendChild(image);

        name.innerHTML = `${town.name}`;
        townData.appendChild(name);

        motto.innerHTML = `${town.motto}`;
        townData.appendChild(motto);

        founded.innerHTML = `Year Founded: ${town.founded}`;
        townData.appendChild(founded);

        population.innerHTML = `Population: ${town.population}`;
        townData.appendChild(population);

        rainFall.innerHTML = `Annual Rain Fall: ${town.rainFall}`;
        townData.appendChild(rainFall);

        image.setAttribute('src', `images/${town.photo}`);
        image.setAttribute('alt', `${town.name}: ${town.motto}`);
        
        document.querySelector('section.tdata').appendChild(eachTown);

      });
    });