const filtry = [
  { 'zadania': 'otwarte' },
  { 'opiekun.nazwa': 'Ala' },
  { priorytet: { $exists: false } }
];
console.log(filtry);
