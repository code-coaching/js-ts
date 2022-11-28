const getDogs = async () => {
  /**
   * Bezoek de url in de browser (of voer deze uit met een programma zoals Postman) om een voorbeeld te zien.
   */
  return fetch('https://dog.ceo/api/breed/hound/images').then((response) => response.json());
};

(async () => {
  const response = await getDogs();
  /*
   * - Maak een nieuwe array waarin enkel afbeeldingen zitten van 'hond-blood' en log deze in de console.
   * - Maak een nieuwe array waarin enkel het gedeelte van de string zit na "https://images.dog.ceo/breeds/" en log deze in de console.
   */

  /*
  * Extra opdracht
  * Maak een index.html waarin de afbeeldingen getoond worden.
  */
})();
