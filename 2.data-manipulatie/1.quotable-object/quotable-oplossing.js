const getQuote = async () => {
  return fetch('https://api.quotable.io/random?tags=technology,famous-quotes').then((response) => response.json());
};

(async () => {
  const quote = await getQuote();
  const { content, author } = quote;
  console.log(`"${content}" - ${author}`);
})();
