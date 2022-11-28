const getQuotes = async () => {
  fetch('https://api.quotable.io/quotes?tags=technology,famous-quotes').then((response) => response.json());
  /**
   * Voorbeeld van een respons
   *
   * {
   *   count: 4,
   *   totalCount: 4,
   *   page: 1,
   *   totalPages: 1,
   *   lastItemIndex: null,
   *   results: [
   *     {
   *       _id: 'VDDodhULiss2',
   *       content: 'It is through science that we prove, but through intuition that we discover.',
   *       author: 'Henri Poincaré',
   *       tags: ['famous-quotes', 'science', 'technology'],
   *       authorSlug: 'henri-poincare',
   *       length: 76,
   *       dateAdded: '2020-09-29',
   *       dateModified: '2020-09-29',
   *     },
   *     {
   *       _id: 'z6ZCI63jw-9k',
   *       content:
   *         'Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create.',
   *       author: 'Albert Einstein',
   *       tags: ['famous-quotes', 'technology', 'wisdom'],
   *       authorSlug: 'albert-einstein',
   *       length: 171,
   *       dateAdded: '2020-09-05',
   *       dateModified: '2020-09-05',
   *     },
   *     {
   *       _id: '_dfC0aL_AGD4',
   *       content: 'Great ideas often receive violent opposition from mediocre minds.',
   *       author: 'Albert Einstein',
   *       tags: ['famous-quotes', 'technology'],
   *       authorSlug: 'albert-einstein',
   *       length: 65,
   *       dateAdded: '2019-08-03',
   *       dateModified: '2019-08-03',
   *     },
   *     {
   *       _id: '_0CfFQ4la0aN',
   *       content: "If you can't explain it simply, you don't understand it well enough.",
   *       author: 'Albert Einstein',
   *       tags: ['famous-quotes', 'technology'],
   *       authorSlug: 'albert-einstein',
   *       length: 68,
   *       dateAdded: '2019-03-15',
   *       dateModified: '2019-03-15',
   *     },
   *   ],
   * };
   */
  console.log(data);
};

/*
 * Dit is een IIFE (Immediately Invoked Function Expression).
 * Hiermee wordt een functie aangemaakt en direct uitgevoerd.
 * Dit is een manier om te zorgen dat er met await gewerkt kan worden in de global scope.
 */
(async () => {
  const quotes = await getQuotes();

  /*
   * Gebruik array methoden om de volgende dingen te doen:
   * 1. Log de lengte van de array in de console.
   * 2. Log de eerste quote in de console.
   * 3. Log de laatste quote in de console.
   * 4. Maak een nieuwe array met alleen de quotes, log deze in de console.
   * 5. Maak een nieuwe array met alleen de auteurs, log deze in de console.
   * 6. Maak een nieuwe array met alleen de quotes die korter zijn dan 100 karakters, log deze in de console.
   * 7. Maak een nieuwe array waarin objecten zitten met alleen de quote en de auteur, log deze in de console.
   * 8. Maak een nieuwe array waarin objecten zitten met alleen de quote en de auteur,
   *    zorg dat er enkel objecten aanwezig zijn waarvan de quote langer is dan 70 karakters, log deze in de console.
   */
  console.log(quotes);

  /*
   * Zie index.html voor een extra uitdaging.
   */
})();
