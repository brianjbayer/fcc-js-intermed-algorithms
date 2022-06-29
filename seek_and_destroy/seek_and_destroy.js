// Given an initial array (the first argument in the destroyer
// function), followed by one or more arguments. Remove all elements
// from the initial array that are of the same value as these
// arguments

// SOLUTION 1
// function destroyer (arr) {
//   const args = [...arguments];
//   let prunedArr = args.shift();
//   console.log('prunedArr', prunedArr);
//   for (const removeElem of args) {
//     prunedArr = prunedArr.filter(elem => elem !== removeElem);
//   }
//   return prunedArr;
// }

// SOLUTION 2
function destroyer (arr, ...removeThese) {
  return arr.filter(elem => !removeThese.includes(elem));
}

module.exports = destroyer;
