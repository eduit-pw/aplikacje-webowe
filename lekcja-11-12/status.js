const { setTimeout: poczekaj } = require('node:timers/promises');

function pobierzStatus() {
  return poczekaj(40, 'gotowe');
}

async function main() {
  console.log('A');
  // Pobierz wynik pobierzStatus() przez await do zmiennej status.
  // Wypisz: Status: <wynik>
  console.log('B');
}

main().catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});

console.log('C');
