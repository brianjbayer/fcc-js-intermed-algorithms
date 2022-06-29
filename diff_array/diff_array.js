// Compare two arrays and return a new array with any items only found
// in one of the two given arrays, but not both. In other words,
// return the symmetric difference of the two arrays.

function diffArray (arr1, arr2) {
  const newArr = [];
  const uniqueToArr1 = arr1.filter(elem => !arr2.includes(elem));
  newArr.push(...uniqueToArr1);
  const uniqueToArr2 = arr2.filter(elem => !arr1.includes(elem));
  newArr.push(...uniqueToArr2);
  return newArr;
}

module.exports = diffArray;
