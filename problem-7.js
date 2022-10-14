/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

Approach #1
By the prime factorizaiton theorem, if a number is not divisible by a any smaller prime number, then it is prime.
*/

const findPrimeNumber = (x) => {
  let primeNums = [2,3];
  let currentNum = 4;

  while (primeNums.length < x) { 
    let divisible = false;
    for (prime of primeNums) {
      if (currentNum % prime === 0) {
        divisible = true;
        break;
      }
    }
    if (!divisible) {
      primeNums.push(currentNum);
    }
    currentNum++
  }

  return currentNum - 1 // subtract 1 since it will be increased by 1 at the end
}

console.log(findPrimeNumber(10001))