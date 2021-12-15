let pow2 = 0;
let power = 0;

while (pow2 < 1000) {
  pow2 = Math.pow(2, power);
  // devo inserire questo if altrimenti stampa anche 2^10 = 1024
  if (pow2 < 1000) {
    console.log(`2^${power} = ${pow2}`);
  }
  power++;
}