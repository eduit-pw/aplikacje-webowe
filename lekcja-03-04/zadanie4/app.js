const dane = [{ nazwa: "A", cena: 12 }, { nazwa: "B", cena: 3 }];
const ceny = dane.map(p => { p.cena * 2; });
const kolejnosc = dane.sort((a, b) => a.cena - b.cena);
const suma = [].reduce((acc, x) => acc + x);
console.log(ceny, kolejnosc, suma);
