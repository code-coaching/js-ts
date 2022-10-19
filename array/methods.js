const persons = [
  { name: 'John', age: 16 },
  { name: 'Jane', age: 18 },
  { name: 'Jack', age: 20 },
  { name: 'Jill', age: 22 },
  { name: 'Judy', age: 24 },
];

// Dit bestand bevat enkele van de meest gebruikte array-methods.

console.log('Array');
console.log('\n');
/*
 * Array.prototype.map()
 * Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * Op een array van objecten kan de "map"-methode worden toegepast.
 * De "map"-methode zal een nieuwe array teruggeven.
 * De parameter is een functie die wordt uitgevoerd op elk element van de array.
 */
console.log('map()');
console.log('-----');

// De functie kan een aparte functie zijn, zoals hieronder.
function getName(someObject) {
  return someObject.name;
}
// Merk op dat de "functie definitie" wordt meegegeven, deze wordt niet aangeroepen
const names = persons.map(getName);

// De functie kan ook een anonieme functie zijn, zoals hieronder.
const names2 = persons.map(function (person) {
  return person.name;
});

// De functie kan ook een anonieme arrow functie zijn met een expliciete return, zoals hieronder.
const names3 = persons.map((person) => {
  return person.name;
});

// De functie kan ook een anonieme arrow functie zijn met een impliciete return, zoals hieronder.
const names4 = persons.map((person) => person.name);

console.log(`names is een array met de waarden: ${names}`);
console.log(`names2 is een array met de waarden: ${names}`);
console.log(`names3 is een array met de waarden: ${names}`);
console.log(`names4 is een array met de waarden: ${names}`);
console.log('\n');

/*
 * Voor de rest van de voorbeelden zal een anonieme arrow functie worden gebruikt.
 * Indien er maar één statement is, zal er gebruikgemaakt worden van een impliciete return.
 * Indien er meerdere statements zijn, zal er gebruikgemaakt worden van een expliciete return.
 */

/*
 * Array.prototype.filter()
 * Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * Op een array van objecten kan de "filter"-methode worden toegepast.
 * De "filter"-methode zal een nieuwe array teruggeven.
 * De parameter is een functie die wordt uitgevoerd op elk element van de array.
 * Als de functie "true" teruggeeft, wordt het element toegevoegd aan de nieuwe array.
 * Als de functie "false" teruggeeft, wordt het element niet toegevoegd aan de nieuwe array.
 */
console.log('filter()');
console.log('--------');

const adults = persons.filter((person) => person.age >= 18);
const minors = persons.filter((person) => person.age < 18);
const namesWithA = persons.filter((person) => person.name.includes('a'));

console.log(`adults (meerderjarigen) is een array met ${adults.length} elementen.`);
console.log(`De namen van deze personen zijn: ${adults.map((person) => person.name)}`); // zie map() voor uitleg
console.log('\n');

console.log(`minors (minderjarigen) is een array met ${minors.length} elementen.`);
console.log(`De namen van deze personen zijn: ${minors.map((person) => person.name)}`); // zie map() voor uitleg
console.log('\n');

console.log(`namesWithA is een array met ${namesWithA.length} elementen.`);
console.log(`De namen van deze personen zijn: ${namesWithA.map((person) => person.name)}`);
