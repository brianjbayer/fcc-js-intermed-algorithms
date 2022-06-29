// Given an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them. The lowest number
// will not always come first.

// SOLUTION 1: Use basic loop
// function sumAll (arr) {
//   let sum = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//   return sum;
// }

// SOLUTION 2: Use recursion
// function sumAll (arr) {
//   const [lo, hi] = [...arr].sort((a, b) => a - b);
//   return (lo === hi) ? lo : lo + sumAll([lo + 1, hi]);
// }

// SOLUTION 3: Sum of Arithmetic Sequence Formula
// NOTE: Sum = n * ((start + end) /2)
// NOTE: n = number of terms in series: abs(end - start) + 1
function sumAll (arr) {
  return (Math.abs(arr[1] - arr[0]) + 1) * ((arr[0] + arr[1]) / 2);
}

module.exports = sumAll;
