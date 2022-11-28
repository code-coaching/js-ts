const getQuote = async () => {
  return fetch('https://api.quotable.io/random?tags=technology,famous-quotes').then((response) => response.json());
  /**
   * Voorbeeld van een respons
   *
   * {
   *   _id: 'z6ZCI63jw-9k',
   *   content: 'Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
   *   author: 'Albert Einstein',
   *   tags: ['famous-quotes', 'technology', 'wisdom'],
   *   authorSlug: 'albert-einstein',
   *   length: 171,
   *   dateAdded: '2020-09-05',
   *   dateModified: '2020-09-05',
   * };
   */
};

/*
 * Dit is een IIFE (Immediately Invoked Function Expression).
 * Hiermee wordt een functie aangemaakt en direct uitgevoerd.
 * Dit is een manier om te zorgen dat er met await gewerkt kan worden in de global scope.
 */
(async () => {
  const quote = await getQuote();
  /*
   * De opdracht is om de `quote` en de `author` te tonen in de console.
   * Met het voorbeeld hierboven zou dit de output zijn:
   * "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create." - Albert Einstein
   */
  console.log(quote);
  /*
   * Zie index.html voor een extra uitdaging.
   */
})();
