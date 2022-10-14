/*
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

Approach #1
The first thing we can try is brute fore by calculating it directly

I think the only way to improve on this is finding some sort of relation that will determine it by knowing the input (100).


*/

// Approach #1
const diff = (num) => {
  let sumOfSquares = 0;
  let sum = 0;

  for (let i=1; i<=num; i++) {
    sumOfSquares += i*i;
    sum += i;
  }

  squareOfSums *= squareOfSums;

  return sum*sum - sumOfSquares;
}

for (let num=1; num <= 15; num++) {
  console.log(`num=${num} diff=${diff(num)}`)
}