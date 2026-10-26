const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const plik = path.join(__dirname, 'dane', 'tekst.txt');
  const tekst = await fs.readFile(plik);
  console.log(tekst.trim());
}

main().catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});
