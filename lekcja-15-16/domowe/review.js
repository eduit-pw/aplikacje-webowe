const tekst = '[{"tytul":"Orbita","minuty":90},{"tytul":"Robot","minuty":100},{"tytul":"Klip","minuty":20}]';
const filmy = JSON.parse(tekst);
const poprawne = filmy.filter(f => typeof f.minuty === 'string');
const dlugie = poprawne.filter(f => f.minuty > 90);
const suma = dlugie.reduce((s, f) => s + f.tytul, 0);
console.log(dlugie.map(f => f.tytul));
console.log(`Minuty: ${suma}`);
