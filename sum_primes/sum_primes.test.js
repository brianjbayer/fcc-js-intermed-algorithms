const sumPrimes = require('./sum_primes');

test('sumPrimes(10) should return a number', () => {
  expect(typeof sumPrimes(10)).toBe('number');
});

test('sumPrimes(10) should return 17', () => {
  expect(sumPrimes(10)).toBe(17);
});

test('sumPrimes(977) should return 73156', () => {
  expect(sumPrimes(977)).toBe(73156);
});
