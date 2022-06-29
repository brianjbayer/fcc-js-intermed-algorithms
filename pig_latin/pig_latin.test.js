const translatePigLatin = require('./pig_latin');

test('translatePigLatin("california") should return the string aliforniacay', () => {
  expect(translatePigLatin('california')).toBe('aliforniacay');
});

test('translatePigLatin("paragraphs") should return the string aragraphspay', () => {
  expect(translatePigLatin('paragraphs')).toBe('aragraphspay');
});

test('translatePigLatin("glove") should return the string oveglay', () => {
  expect(translatePigLatin('glove')).toBe('oveglay');
});

test('translatePigLatin("algorithm") should return the string algorithmway', () => {
  expect(translatePigLatin('algorithm')).toBe('algorithmway');
});

test('translatePigLatin("eight") should return the string eightway', () => {
  expect(translatePigLatin('eight')).toBe('eightway');
});

test('translatePigLatin("schwartz") should return the string artzschway', () => {
  expect(translatePigLatin('schwartz')).toBe('artzschway');
});

test('translatePigLatin("rhythm") should return the string rhythmay', () => {
  expect(translatePigLatin('rhythm')).toBe('rhythmay');
});
