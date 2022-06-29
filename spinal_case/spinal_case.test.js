const spinalCase = require('./spinal_case');

test('spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap', () => {
  expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap');
});

test('spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap', () => {
  expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap');
});

test('spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show', () => {
  expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show');
});

test('spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh', () => {
  expect(spinalCase('Teletubbies say Eh-oh')).toBe('teletubbies-say-eh-oh');
});

test('spinalCase("AllThe-small Things") should return the string all-the-small-things', () => {
  expect(spinalCase('AllThe-small Things')).toBe('all-the-small-things');
});
