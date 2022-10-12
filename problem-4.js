/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

/*
999*999
999*998
998*998
999*997
998*997
999*996
997*997

*/

/*
the range is 10,000 (100^2) to 998,001(999^2)
the largest palindrome: 997,799
next largest: 996,699 ; 995,599 ; ... ; 990,099 ; 989,989 ; ... ; 100,001 ; 99,999 ; 99,899 ; ... ; 99,099 ; 98,989
so you are essentially counting down on the left half (ex 997 to 1) and reversing on the left with 6 digits
when there are 5 digits, you are counting down the middle digit and counting down the left nums whenmiddle digit gets to zero and reset middle to 9


divide num by 999 and ceil it to get min number. if < 100 then set 100
divide num by 100 and floor to get max num. if > 999 then set 999
*/

// function to get next palindrome

let nextPalindrome = function(current) {
  let currentString = current.toString();

  if (currentString.length === 6) {
    let currentLeft = parseInt(currentString.substring(0,3));
    
    if (currentLeft === 100) {
      return 99,999
    } else {
      let nextLeft = currentLeft - 1
      let palindromeStr = nextLeft.toString() + nextLeft.toString().split('').reverse().join('');
      return parseInt(palindromeStr)
    }
  } else { // 5 digits
    let currentLeft = currentString.substring(0,2);
    let currentMiddle = currentString[2];

    if (current === 10001) { // smallest palindrome
      if (currentMiddle === 0) {
        let nextLeftStr = (parseInt(currentLeft) - 1).toStr
        let palindromeStr = nextLeftStr + '9' + nextLeftStr.split('').reverse().join('')
        return parseInt(palindromeStr);
      } else {
        let palindromeStr = currentLeft + (parseInt(currentMiddle) - 1).toString() + currentLeft.split('').reverse().join('');
        return parseInt(palindromeStr);
      }
    } else {
      return -1
    }
  }
}


let lp3 = function() {
  let palindrome = 997799;
  while (palindrome > 0) {
    let max = palindrome / 100 < 999 ? Math.floor(palindrome / 100) : 999;
    let min = palindrome / 999 > 100 ? Math.ceil(palindrome / 999) : 100;
  
    for (let i=min; i<=max; i++) {
      if (palindrome % i === 0) {
        return palindrome
      }
    }
  
    palindrome = nextPalindrome(palindrome);
  }
}

console.log(lp3())

two triangles = a*b/2 + a*c/2 = 
rectangle = a*(b+c)