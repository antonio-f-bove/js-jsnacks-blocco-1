const array = [];
let index = 0;
let sum = 0;

do {
  const n = parseInt(prompt('Inserisci un numero'));
  sum += n;
  if (sum < 50) {
    array[index] = n;
  }
  index++;
} while (sum < 50);

console.log(array);