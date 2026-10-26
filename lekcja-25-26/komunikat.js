const fs = require('node:fs/promises');
const path = require('node:path');
async function main() {
  // TODO: odczytaj dwa pliki, połącz tekst i zapisz w out/komunikat.txt.
}
main().catch(blad => { console.error(blad.message); process.exitCode = 1; });
