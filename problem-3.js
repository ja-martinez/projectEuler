/*
What is the largest prime factor of the number 600851475143?
*/

let lpf = function(num) {
  let currentFactor = num;
  let currentDivisor = 2;
  while (currentDivisor <= currentFactor / 2) {
    if ( currentFactor % currentDivisor  === 0) {
      currentFactor = currentFactor / currentDivisor
      currentDivisor = 2;
    } else {
      currentDivisor++
    }
  }

  return currentFactor
}

let num = 600851475143;
console.log(lpf(num));