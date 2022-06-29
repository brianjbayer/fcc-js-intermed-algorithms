// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
const htmlEntries = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};
Object.freeze(htmlEntries);

function convertHTML (str) {
  return str.split('').map(char =>
    (Object.keys(htmlEntries).includes(char))
      ? htmlEntries[char]
      : char).join('');
}

module.exports = convertHTML;
