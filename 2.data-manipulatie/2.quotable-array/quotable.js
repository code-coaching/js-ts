const getQuotes = async () => {
  return fetch('https://api.quotable.io/quotes?tags=technology,famous-quotes').then((response) => response.json());
};

(async () => {
  const response = await getQuotes();
  const quotes = response.results;
  /*
   * Gebruik array methoden om de volgende dingen te doen:
   * 1. Log de lengte van de array in de console.
   */
  console.log(quotes.length);

  /*
   * 2. Log de eerste quote in de console.
   */
  console.log(quotes[0]);

  /*
   * 3. Log de laatste quote in de console.
   */
  console.log(quotes[quotes.length - 1]);

  /*
   * 4. Maak een nieuwe array met alleen de quotes, log deze in de console.
   */
  const onlyQuotes = quotes.map((quote) => quote.content);
  console.log(onlyQuotes);

  /*
   * 5. Maak een nieuwe array met alleen de auteurs, log deze in de console.
   */
  const onlyAuthors = quotes.map((quote) => quote.author);
  console.log(onlyAuthors);

  /*
   * 6. Maak een nieuwe array met alleen de quotes die korter zijn dan 100 karakters, log deze in de console.
   */
  const quotesShorterThan100 = quotes.map((quote) => quote.content).filter((sentence) => sentence.length < 100);
  console.log(quotesShorterThan100);
  const alternativeSolution = quotes.filter((quote) => quote.length < 100).map((quote) => quote.content);
  console.log(alternativeSolution);
  /*
   * 7. Maak een nieuwe array waarin objecten zitten met alleen de quote en de auteur, log deze in de console.
   */
  const onlyQuoteAndAuthor = quotes.map((quote) => {
    const { content, author } = quote;
    return { content, author };
  });
  console.log(onlyQuoteAndAuthor);

  /*
   * 8. Maak een nieuwe array waarin objecten zitten met alleen de quote en de auteur,
   *    zorg dat er enkel objecten aanwezig zijn waarvan de quote langer is dan 70 karakters, log deze in de console.
   */
  const quotesAndAuthors = quotes
    .filter((quote) => quote.content.length > 70)
    .map((quote) => {
      const { content, author } = quote;
      return { content, author };
    });
  console.log(quotesAndAuthors);
})();
