/*
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/*
Notes
number has to be ... 
* even
* greater than 2520

We can hard code it by checking even number starting with 2520 and checking if every number from 1 to 20 divides it. 

improvement#1
To improve it, we can check every multiple of 20 instead of every multiple of 20. This will give us the smallest set of numbers to check

improvement#2
We can also see that we only need to check the divisors that are > largest/2 because all the other ones are their factors. But this is still hard coded. I want to have a better solution.

improvement#3
I think we can construct the number based on the prime factorization. We can construct a prime factor that is a multiple of every number. We can start with 1*2*3. If we think of any number, it is either
1. prime
2. power of a smaller number
3. multiple of two smaller numbers

Another way of looking at it is if we
*/

// Checking all
// function divisibleByAll(largest) {
//   let currentNum = 20

//   while(true) {
//     for (let divisor=2; divisor<=largest; divisor++) {
//       if (currentNum % divisor !== 0) {
//         break;
//       }
//       if (divisor === largest) {
//         return currentNum
//       }
//     }
//     currentNum += 2;
//   }
// }


// Improvement #1
// function divisibleByAll(largest) {
//   let currentNum = 20

//   while(true) {
//     let divisor = Math.ceil(largest/2);
//     while(currentNum % divisor === 0) {
//       if (divisor === largest) {
//         return currentNum;
//       } else {
//         divisor++;
//       }
//     }
//     currentNum += 20;
//   }
// }

function divisibleByAll(largest) {
  let factors = [2,3];

  for (let num=4; num<=20; num++) {
    let newFactor = num;
    for (const factor of factors) {
      if (newFactor % factor === 0) {
        newFactor /= factor;
      }
    }
    if (newFactor !== 1) {
      factors.push(newFactor);
    }
  }

  let lcm = factors.reduce((prev, curr) => prev*curr, 1);
  return lcm;
}

console.log(divisibleByAll(20));