const desiredLength = 4;    // in modo da poter cambiare successivamente il numero di cifre

let numberString = '';
let sum = 0;

do {
  numberString = prompt(`Inserisci un numero a ${desiredLength} cifre`);
} while (numberString.length !== desiredLength);

for (let i = 0; i < numberString.length; i++) {
  sum += parseInt(numberString[i]);
}

console.log(sum);