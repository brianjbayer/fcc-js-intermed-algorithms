// Given a positive integer num, return the sum of all odd Fibonacci
// numbers that are less than or equal to num.

function sumFibs (num) {
  let prev = 0;
  let curr = 1;
  let oddSum = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      oddSum += curr;
    }
    const fib = curr + prev;
    prev = curr;
    curr = fib;
  }
  return oddSum;
}

module.exports = sumFibs;
