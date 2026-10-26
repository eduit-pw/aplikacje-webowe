const tekst = '{"cena":"abc"}';
const dane = JSON.parse(tekst);
console.log(dane.cena * 2);
