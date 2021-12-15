let N = parseInt(prompt('N = ?'));

for (let i = 1; i <= N; i++) {
  let cube = Math.pow(i, 3);
  console.log(`${i}^3 = ${cube}`);
}