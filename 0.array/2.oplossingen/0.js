const persons = [
  { name: 'John', age: 16 },
  { name: 'Jane', age: 18 },
  { name: 'Jack', age: 20 },
  { name: 'Jill', age: 22 },
  { name: 'Judy', age: 24 },
  { name: 'Barry', age: 31 },
];

/*
 * Gebruik de map methode om een array te maken met de namen van alle personen.
 */
const names = persons.map((person) => person.name);

/*
 * Gebruik de map methode om een array te maken met de namen van alle personen die ouder zijn dan 18 jaar.
 */
const ages = persons.map((person) => (person.age > 18 ? person.name : undefined)).filter((name) => name !== undefined);

/*
 * Gebruik de filter methode om een array te maken met alle personen die ouder zijn dan 18 jaar.
 */
const adults = persons.filter((person) => person.age > 18);

/*
 * Gebruik de filter methode om een array te maken met alle personen die ouder zijn dan 18 jaar en jonger dan 30 jaar.
 * Gebruik een `chained` map methode met het resultaat van de filter methode om een array te maken met de namen van alle personen die ouder zijn dan 18 jaar en jonger dan 30 jaar.
 */
const adultNamesYoungerThanThirty = persons
  .filter((person) => person.age > 18 && person.age < 30)
  .map((person) => person.name);

/*
 * Gebruik de sort methode om een array te maken met de namen van alle personen alfabetisch gesorteerd.
 * Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
const sortedPersonsByName = persons.sort((a, b) => a.name.localeCompare(b.name));

/*
 * Gebruik de sort methode om een array te maken met de namen van alle personen gesorteerd op leeftijd van oud naar jong.
 */
const sortedPersonsByAgeDescending = persons.sort((a, b) => b.age - a.age);
