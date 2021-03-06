const convertHTML = require('./convert_html');

test('convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana', () => {
  expect(convertHTML('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
});

test('convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos', () => {
  expect(convertHTML('Hamburgers < Pizza < Tacos')).toBe('Hamburgers &lt; Pizza &lt; Tacos');
});

test('convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve', () => {
  expect(convertHTML('Sixty > twelve')).toBe('Sixty &gt; twelve');
});

test('convertHTML(\'Stuff in "quotation marks"\') should return the string Stuff in &quot;quotation marks&quot;', () => {
  expect(convertHTML('Stuff in "quotation marks"')).toBe('Stuff in &quot;quotation marks&quot;');
});

test('convertHTML("Schindler\'s List") should return the string Schindler&apos;s List', () => {
  expect(convertHTML("Schindler's List")).toBe('Schindler&apos;s List');
});

test('convertHTML("<>") should return the string &lt;&gt;', () => {
  expect(convertHTML('<>')).toBe('&lt;&gt;');
});

test('convertHTML("abc") should return the string abc', () => {
  expect(convertHTML('abc')).toBe('abc');
});
