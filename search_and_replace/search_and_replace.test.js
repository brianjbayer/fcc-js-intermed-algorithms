const myReplace = require('./search_and_replace');

test('myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall', () => {
  expect(myReplace('Let us go to the store', 'store', 'mall')).toBe('Let us go to the mall');
});

test('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch', () => {
  expect(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toBe('He is Sitting on the couch');
});

test('myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there', () => {
  expect(myReplace('I think we should look up there', 'up', 'Down')).toBe('I think we should look down there');
});
