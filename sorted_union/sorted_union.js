// Write a function that takes two or more arrays and returns a new
// array of unique values in the order of (appearance) the original
// provided arrays.
// In other words, all values present from all arrays should be
// included in their original order, but with no duplicates in the
// final array.

// SOLUTION 1
// function uniteUnique (arr) {
//   const allVals = [...arguments].flat();
//   const uniqVals = [];
//   for (const val of allVals) {
//     if (!uniqVals.includes(val)) {
//       uniqVals.push(val);
//     }
//   }
//   console.log('uniqVals', uniqVals);
//   return uniqVals;
// }

// SOLUTION 2
// function uniteUnique (arr) {
//   return [...arguments]
//     .flat()
//     .filter((val, idx, arr) => arr.indexOf(val) === idx);
// }

// SOLUTION 3
const uniteUnique = (...arr) => [...new Set(arr.flat())];

module.exports = uniteUnique;
