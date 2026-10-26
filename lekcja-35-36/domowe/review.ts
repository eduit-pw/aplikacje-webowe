interface Osoba { id: number | string; email?: string; }
function opisId(id: number | string): string {
  if (typeof id === 'boolean') return `NR-${id}`;
  return `KOD-${id.toUpperCase()}`;
}
function kontakt(osoba: Osoba): string {
  return osoba.email.toUpperCase();
}
const a: Osoba = { id: 7 };
const b: Osoba = { id: ' ab-2 ', email: 'ala@example.org' };
console.log(opisId(a.id), kontakt(a));
console.log(opisId(b.id), kontakt(b));
