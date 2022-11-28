const getDogs = async () => {
  return fetch('https://dog.ceo/api/breed/hound/images').then((response) => response.json());
};

(async () => {
  const response = await getDogs();
  const urls = response.message;

  const hondBloodImages = urls.filter((url) => url.includes('hound-blood'));
  console.log(hondBloodImages);

  const subUrls = urls.map((url) => url.split('https://images.dog.ceo/breeds/')[1]);
  console.log(subUrls);

  /*
   * Extra opdracht
   * Maak een index.html waarin de afbeeldingen getoond worden.
   */
})();
