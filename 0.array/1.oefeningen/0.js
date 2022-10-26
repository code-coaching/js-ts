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
 * Resultaat: [ 'John', 'Jane', 'Jack', 'Jill', 'Judy', 'Barry' ]
 */

/*
 * Gebruik de map methode om een array te maken met de namen van alle personen die ouder zijn dan 18 jaar.
 * Resultaat: [ undefined, undefined, 'Jack', 'Jill', 'Judy', 'Barry' ]
 * Gebruik een `chained` filter methode om enkel waarden over te houden die niet undefined zijn.
 * Resultaat: [ 'Jack', 'Jill', 'Judy', 'Barry' ]
 */

/*
 * Gebruik de filter methode om een array te maken met alle personen die ouder zijn dan 18 jaar.
 * Resultaat: [ { name: 'Jane', age: 18 }, { name: 'Jack', age: 20 }, { name: 'Jill', age: 22 }, { name: 'Judy', age: 24 }, { name: 'Barry', age: 31 } ]
 */

/*
 * Gebruik de filter methode om een array te maken met alle personen die ouder zijn dan 18 jaar en jonger dan 30 jaar.
 * Gebruik een `chained` map methode met het resultaat van de filter methode om een array te maken met de namen van alle personen die ouder zijn dan 18 jaar en jonger dan 30 jaar.
 * Resultaat: [ 'Jack', 'Jill', 'Judy' ]
 */

/*
 * Gebruik de sort methode om een array te maken met de namen van alle personen alfabetisch gesorteerd.
 * Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * Resultaat: [ { name: 'Barry', age: 31 }, { name: 'Jack', age: 20 }, { name: 'Jane', age: 18 }, { name: 'Jill', age: 22 }, { name: 'John', age: 16 }, { name: 'Judy', age: 24 } ]
 */

/*
 * Gebruik de sort methode om een array te maken met de namen van alle personen gesorteerd op leeftijd van oud naar jong.
 * Resultaat: [ { name: 'Barry', age: 31 }, { name: 'Judy', age: 24 }, { name: 'Jill', age: 22 }, { name: 'Jack', age: 20 }, { name: 'Jane', age: 18 }, { name: 'John', age: 16 } ]
 */
const sortedPersonsByAgeDescending = persons.sort((a, b) => b.age - a.age);
