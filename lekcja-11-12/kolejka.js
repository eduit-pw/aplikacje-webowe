// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

const _ = require('lodash');

const { setTimeout: poczekaj } = require('node:timers/promises');

const zestawA = [
  { id: 'D-1', typ: 'druk' },
  { id: 'D-2', typ: 'skan' },
  { id: 'D-1', typ: 'druk' },
  { id: 'D-3', typ: 'druk' }
];

const zestawB = [
  { id: 'X-8', typ: 'druk' },
  { id: 'X-9', typ: 'druk' },
  { id: 'X-8', typ: 'druk' }
];

const zestawC = [];

function pobierzZgloszenia(dane) {
  return poczekaj(40, dane);
}

function obsluz(zgloszenie) {
  return poczekaj(30, `Gotowe: ${zgloszenie.id}`);
}

async function main(daneWejsciowe) {
  // TODO: uzupełnij funkcję.
  throw new Error('TODO');
}

main(zestawA).catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});

// Uzupełnij wykonanie programu zgodnie z README.
