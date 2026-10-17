const { setTimeout: poczekaj } = require('node:timers/promises');

async function obsluz(zgloszenie) {
  poczekaj(30, `Gotowe: ${zgloszenie.id}`);
}

async function main() {
  console.log('START');
  const komunikat = await obsluz({ id: 'D-7' });
  console.log(komunikat);
  console.log('KONIEC');
}

main().catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});
