const addTogether = require('./arguments_optional');

test('addTogether(2, 3) should return 5', () => {
  expect(addTogether(2, 3)).toBe(5);
});

test('addTogether(23, 30) should return 53', () => {
  expect(addTogether(23, 30)).toBe(53);
});

test('addTogether(5)(7) should return 12', () => {
  expect(addTogether(5)(7)).toBe(12);
});

test('addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined', () => {
  expect(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(undefined);
});

test('addTogether(2, "3") should return undefined', () => {
  expect(addTogether(2, '3')).toBe(undefined);
});

test('addTogether(2)([3]) should return undefined', () => {
  expect(addTogether(2)([3])).toBe(undefined);
});

test('addTogether("2", 3) should return undefined', () => {
  expect(addTogether('2', 3)).toBe(undefined);
});
