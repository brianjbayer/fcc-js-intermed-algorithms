// Translate the provided string to Pig Latin. Input strings are
// guaranteed to be English words in all lowercase.
// - If a word begins with a consonant, take the first consonant
//   or consonant cluster, move it to the end of the word,
//   and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Solution 1
// function translatePigLatin (str) {
//   const consonants = str.match(/^[^aeiou]+/);
//   return consonants != null
//     ? str.slice(consonants[0].length) + consonants[0] + 'ay'
//     : str + 'way';
// }

// Solution 2
function translatePigLatin (str) {
  return str
    .replace(/^[aeiou]\w*/, '$&way')
    .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay');
}

module.exports = translatePigLatin;
