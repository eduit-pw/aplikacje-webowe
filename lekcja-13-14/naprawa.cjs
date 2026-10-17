const fs = require('node:fs/promises');
async function main() {
  const tekst = await fs.readFile('dane/tekst.txt', 'utf8');
  console.log(tekst);
}
main().catch(blad => { console.error(blad.message); process.exitCode = 1; });
