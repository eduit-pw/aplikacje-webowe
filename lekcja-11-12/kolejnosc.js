console.log('START');

setTimeout(() => {
  console.log('TIMER');
}, 0);

Promise.resolve().then(() => {
  console.log('PROMISE');
});

console.log('KONIEC');
