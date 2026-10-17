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

// Napisz funkcję async main(daneWejsciowe) oraz kod jej uruchomienia.
