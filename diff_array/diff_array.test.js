const diffArray = require('./diff_array');

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
test('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return Array', () => {
  expect(Array.isArray(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']))).toBe(true);
});

test('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"]', () => {
  expect(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).toEqual(['pink wool']);
});

test('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"]', () => {
  expect(diffArray(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'])).toEqual(['pink wool', 'diorite']);
});

test('["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return []', () => {
  expect(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub'])).toEqual([]);
});

test('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]', () => {
  expect(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])).toEqual(['piglet', 4]);
});

test('[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"]', () => {
  expect(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly'])).toEqual([1, 'calf', 3, 'piglet', 7, 'filly']);
});
