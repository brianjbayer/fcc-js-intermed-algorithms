const fearNotLetter = require('./missing_letters');

test('fearNotLetter("abce") should return the string d', () => {
  expect(fearNotLetter('abce')).toBe('d');
});

test('fearNotLetter("abcdefghjklmno") should return the string i', () => {
  expect(fearNotLetter('abcdefghjklmno')).toBe('i');
});

test('fearNotLetter("stvwx") should return the string u', () => {
  expect(fearNotLetter('stvwx')).toBe('u');
});

test('fearNotLetter("bcdf") should return the string e', () => {
  expect(fearNotLetter('bcdf')).toBe('e');
});

test('fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined', () => {
  expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
});
