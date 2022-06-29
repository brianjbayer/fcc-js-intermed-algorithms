// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter (str) {
  const startCode = str.charCodeAt(0);
  let missingLetter;
  let i = 0;
  do {
    missingLetter = (str[i].charCodeAt(0) !== startCode + i)
      ? String.fromCharCode(startCode + i)
      : undefined;
    i++;
  } while (!missingLetter && i < str.length);

  return missingLetter;
}

module.exports = fearNotLetter;
