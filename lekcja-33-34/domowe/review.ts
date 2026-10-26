function metry(kilometry: string): number {
  return kilometry / 1000;
}
function koszt(cena: number, osoby: number): number {
  return cena + osoby;
}
const dystans: number = metry(1.5);
const oplata: number = koszt(4, 3);
console.log(`Metry: ${dystans}`);
console.log(`Opłata: ${oplata}`);
