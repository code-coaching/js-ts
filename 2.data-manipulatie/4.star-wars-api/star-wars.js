const starWars = {
  climate: 'Arid',
  diameter: '10465',
  gravity: '1 standard',
  name: 'Tatooine',
  orbital_period: '304',
  population: '200000',
  residents: ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/'],
  rotation_period: '23',
  surface_water: '1',
  terrain: 'Dessert',
  url: 'https://swapi.dev/api/planets/1/',
};

const getPlanetInfo = async (id) => {
  /**
   * Bezoek de url in de browser (of voer deze uit met een programma zoals Postman) om een voorbeeld te zien.
   * Bijvoorbeeld: https://swapi.dev/api/planets/1/
   */
  return fetch(`https://swapi.dev/api/planets/${id}/`).then((response) => response.json());
};

(async () => {
  const response = await getPlanetInfo(1);

  let inwoners = [];
  for (let i = 0; i < response.residents.length; i++) {
    const result = await fetch(response.residents[i]).then((r) => r.json());

    const inwoner = {
      naam: result.name,
      lengte: result.height,
      gewicht: result.mass,
    };

    /*
    * Gebaseerd op het huidige voorbeeld, haal de titel van elke film op waarin het personage voorkomt.
    * Tip: gebruik de url in de array genaamd 'films'.
    * Merk op: de volgorde van de films is niet belangrijk
    */

    inwoners.push(inwoner);
  }

  const details = {
    naam: response.name,
    terrein: response.terrain,
    inwoners,
  };

  console.log(details);
  /*
   * Extra opdracht
   * Maak een index.html waarin een invoerveld staat waarin een nummer ingevoerd kan worden.
   * Maak een knop die de details van de planeet ophaalt en toont.
   */
})();
