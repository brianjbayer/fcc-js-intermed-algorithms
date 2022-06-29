// Create a function that sums two arguments together. If only one
// argument is provided, then return a function that expects one
// argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2)
// should return a function.
// Calling this returned function with a single argument will then return
// the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether () {
  const [arg1, arg2] = arguments;

  if (typeof arg1 !== 'number') {
    return undefined;
  }

  if (arg2 === undefined) {
    return (arg2) => addTogether(arg1, arg2);
  }
  if (typeof arg2 !== 'number') {
    return undefined;
  }

  return arg1 + arg2;
}

module.exports = addTogether;
