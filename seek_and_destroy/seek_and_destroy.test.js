const destroyer = require('./seek_and_destroy');

test('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]', () => {
  expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
});

test('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]', () => {
  expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
});

test('destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]', () => {
  expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
});

test('destroyer([2, 3, 2, 3], 2, 3) should return []', () => {
  expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
});

test('destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]', () => {
  expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toEqual(['hamburger']);
});
