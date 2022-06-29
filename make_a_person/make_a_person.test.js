const Person = require('./make_a_person');

test('Object.keys(bob).length should always return 6', () => {
  expect(Object.keys(new Person('Bob Ross')).length).toBe(6);
});

test('bob instanceof Person should return true', () => {
  expect(new Person('Bob Ross') instanceof Person).toBe(true);
});

test('bob.firstName should return undefined', () => {
  expect(new Person('Bob Ross').firstName).toBe(undefined);
});

test('bob.lastName should return undefined', () => {
  expect(new Person('Bob Ross').lastName).toBe(undefined);
});

test('bob.getFirstName() should return the string Bob', () => {
  expect(new Person('Bob Ross').getFirstName()).toBe('Bob');
});

test('bob.getLastName() should return the string Ross', () => {
  expect(new Person('Bob Ross').getLastName()).toBe('Ross');
});

test('bob.getFullName() should return the string Bob Ross', () => {
  expect(new Person('Bob Ross').getFullName()).toBe('Bob Ross');
});

test('bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell")', () => {
  const bob = new Person('Bob Ross');
  bob.setFirstName('Haskell');
  expect(bob.getFullName()).toBe('Haskell Ross');
});

test('bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry")', () => {
  const bob = new Person('Bob Ross');
  bob.setFirstName('Haskell');
  bob.setLastName('Curry');
  expect(bob.getFullName()).toBe('Haskell Curry');
});

test('bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry")', () => {
  const bob = new Person('Bob Ross');
  bob.setFullName('Haskell Curry');
  expect(bob.getFullName()).toBe('Haskell Curry');
});

test('bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry")', () => {
  const bob = new Person('Bob Ross');
  bob.setFullName('Haskell Curry');
  expect(bob.getFirstName()).toBe('Haskell');
});

test('bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry")', () => {
  const bob = new Person('Bob Ross');
  bob.setFullName('Haskell Curry');
  expect(bob.getLastName()).toBe('Curry');
});
