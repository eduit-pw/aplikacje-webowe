const { setTimeout: poczekaj } = require('node:timers/promises');

function pobierzStatus() {
  return poczekaj(40, 'gotowe');
}

async function main() {
  // TODO: uzupełnij funkcję.
  throw new Error('TODO');
}

main().catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});

// Uzupełnij wykonanie programu zgodnie z README.
