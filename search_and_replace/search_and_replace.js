// Perform a search and replace on the sentence using the arguments
// provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when
// you are replacing it. For example if you mean to replace the word
// Book with the word dog, it should be replaced as Dog

function myReplace (str, before, after) {
  // Assume non-numeric
  const isUpperCase = before[0].toUpperCase() === before[0];

  const afterCase = ((isUpperCase)
    ? after[0].toUpperCase()
    : after[0].toLowerCase()) + after.slice(1);

  // Solution 1
  // return str.split(' ')
  //   .map(word =>
  //     (word == before)
  //     ? afterCase
  //     : word).join(' ');

  // Solution 2
  return str.replace(before, afterCase);
}

module.exports = myReplace;
