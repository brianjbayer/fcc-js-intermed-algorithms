// Flatten a nested array. You must account for varying levels of nesting.
// Solution should not use the Array.prototype.flat() or
// Array.prototype.flatMap() methods.

function steamrollArray (arr) {
  const flatArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      // Recursively flatten the element and add it to flatArr
      // BUT the recursive call return an array so flatten that
      // before pushing with spread operator (...)
      flatArr.push(...steamrollArray(element));
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
}

module.exports = steamrollArray;
