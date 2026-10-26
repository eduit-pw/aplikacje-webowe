const utwory = [
  { nazwa: 'B', sekundy: 120, dostepny: true },
  { nazwa: 'A', sekundy: 80, dostepny: true },
  { nazwa: 'C', sekundy: 200, dostepny: false }
];
const wybrane = utwory.filter(u => !u.dostepny);
const suma = wybrane.reduce((s, u) => s + 1, 0);
const wedlugCzasu = utwory.sort((a, b) => a.sekundy - b.sekundy);
console.log(wybrane.map(u => u.nazwa));
console.log(suma);
console.log(wedlugCzasu.map(u => u.nazwa));
console.log(utwory.map(u => u.nazwa));
