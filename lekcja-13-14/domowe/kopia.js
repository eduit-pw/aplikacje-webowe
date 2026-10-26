const fs = require('node:fs/promises');
const path = require('node:path');

// Kopia biletu ma zachować pełną treść, w tym polskie znaki.
// Każde uruchomienie odświeża aktualną kopię biletu.

async function main() {
  const wejscie = path.join('dane', 'bilet.txt');
  const katalog = path.join(__dirname, 'out');
  const wyjscie = path.join(katalog, 'bilet_kopia.txt');

  const tekst = await fs.readFile(wejscie, 'ascii');

  await fs.mkdir(katalog, { recursive: true });
  await fs.appendFile(wyjscie, tekst, 'utf8');

  console.log('Kopia biletu została zapisana.');
  console.log(`Nazwa: ${path.basename(wyjscie)}`);
}

main().catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});
