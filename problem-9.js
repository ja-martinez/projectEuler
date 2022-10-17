/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

Approach #1
just brute force it and use bounds to take a<b<c into account
iterate over integers 335 to 997 for c. Iterate over numbers floor((1000-c)/2)+1 to 1000-c-1 for b. Calculate a=1000-c-b and check if it's a pythagorean triple
*/


const findPythagoreanTripleProduct = () => {
  for (let c=335; c<=997; c++) {
    let bLowerBound = Math.floor((1000-c)/2)+1;
    for (let b=bLowerBound; b<=1000-c-1; b++) {
      let a = 1000 - c - b;
      if (a*a + b*b === c*c) {
        console.log(a, b, c)
        return a*b*c
      }
    }
  }

  return false;
}

console.log(findPythagoreanTripleProduct());