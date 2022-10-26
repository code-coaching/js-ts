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
 * Op een array kan de "map"-methode worden toegepast.
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
 * Op een array kan de "filter"-methode worden toegepast.
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
console.log('\n');

/*
 * Array.prototype.find()
 * Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 *
 * Op een array kan de "find"-methode worden toegepast.
 * De parameter is een functie die wordt uitgevoerd op elk element van de array.
 * Als de functie "true" teruggeeft, wordt het element teruggegeven en zal de "find"-methode stoppen met zoeken.
 */
console.log('find()');
console.log('------');
const firstAdult = persons.find((person) => person.age >= 18);
// De eerste iteratie evalueert "person.age >= 18" naar "false".
// De tweede iteratie evalueert "person.age >= 18" naar "true".
// De "find"-methode stopt met zoeken en geeft het element terug.
console.log(`De eerste meerderjarige persoon in de array is: ${firstAdult.name}`);

const firstPersonWithA = persons.find((person) => person.name.includes('i'));
// De eerste iteratie evalueert "person.name.includes('i')" naar "false".
// De tweede iteratie evalueert "person.name.includes('i')" naar "false".
// De derde iteratie evalueert "person.name.includes('i')" naar "false".
// De vierde iteratie evalueert "person.name.includes('i')" naar "true".
// De "find"-methode stopt met zoeken en geeft het element terug.
console.log(`De eerste persoon met een 'i' in de naam is: ${firstPersonWithA.name}`);

const firstPersonWithZ = persons.find((person) => person.name.includes('z'));
// Elke iteratie evalueert naar "false".
// De "find"-methode stopt met zoeken en geeft "undefined" terug.
if (firstPersonWithZ) {
  console.log(`De eerste persoon met een 'z' in de naam is: ${firstPersonWithZ.name}`);
} else {
  // if (undefined) is hetzelfde als if (false) - de else wordt uitgevoerd.
  console.log('Er is geen persoon met een "z" in de naam.');
}
console.log('\n');

/*
 * Array.prototype.findIndex()
 * Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 *
 * De "findIndex"-methode is hetzelfde als de "find"-methode, maar geeft de index van het gevonden element terug.
 */
console.log('findIndex()');
console.log('-----------');
const indexFirstAdult = persons.findIndex((person) => person.age >= 18);
console.log(`De index van de eerste meerderjarige persoon in de array is: ${indexFirstAdult}`);
console.log(`Dit is de persoon met de naam: ${persons[indexFirstAdult].name}`);
console.log('\n');

/*
 * Chaining functions
 * Je kan functie die een nieuwe array teruggeven, aan elkaar koppelen.
 */
console.log('Chaining Methods');
console.log('-----------');
const adultNames = persons
  .sort((a, b) => a.age > b.age)
  .filter((person) => person.age >= 18)
  .map((person) => person.name);

console.log(`De namen van de meerderjarigen zijn: ${adultNames}`);
