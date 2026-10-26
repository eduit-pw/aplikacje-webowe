const { setTimeout: poczekaj } = require('node:timers/promises');
function pobierz() {
  poczekaj(20, 'gotowe');
}
async function main() {
  console.log('START');
  const status = pobierz();
  console.log('KONIEC');
  console.log(`Status: ${status}`);
}
main().catch(blad => {
  console.error(blad.message);
  process.exitCode = 1;
});
