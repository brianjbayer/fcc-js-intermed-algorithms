const truthCheck = require('./everything_be_true');

test('truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") should return false', () => {
  expect(truthCheck([{ name: 'Quincy', role: 'Founder', isBot: false }, { name: 'Naomi', role: '', isBot: false }, { name: 'Camperbot', role: 'Bot', isBot: true }], 'isBot')).toBe(false);
});

test('truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name") should return true', () => {
  expect(truthCheck([{ name: 'Quincy', role: 'Founder', isBot: false }, { name: 'Naomi', role: '', isBot: false }, { name: 'Camperbot', role: 'Bot', isBot: true }], 'name')).toBe(true);
});

test('truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role") should return false', () => {
  expect(truthCheck([{ name: 'Quincy', role: 'Founder', isBot: false }, { name: 'Naomi', role: '', isBot: false }, { name: 'Camperbot', role: 'Bot', isBot: true }], 'role')).toBe(false);
});

test('truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number") should return true', () => {
  expect(truthCheck([{ name: 'Pikachu', number: 25, caught: 3 }, { name: 'Togepi', number: 175, caught: 1 }], 'number')).toBe(true);
});

test('truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught") should return false', () => {
  expect(truthCheck([{ name: 'Pikachu', number: 25, caught: 3 }, { name: 'Togepi', number: 175, caught: 1 }, { name: 'MissingNo', number: NaN, caught: 0 }], 'caught')).toBe(false);
});

test('truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number") should return false', () => {
  expect(truthCheck([{ name: 'Pikachu', number: 25, caught: 3 }, { name: 'Togepi', number: 175, caught: 1 }, { name: 'MissingNo', number: NaN, caught: 0 }], 'caught')).toBe(false);
});

test('truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username") should return false', () => {
  expect(truthCheck([{ name: 'Quincy', username: 'QuincyLarson' }, { name: 'Naomi', username: 'nhcarrigan' }, { name: 'Camperbot' }], 'username')).toBe(false);
});

test('truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users") should return true', () => {
  expect(truthCheck([{ name: 'freeCodeCamp', users: [{ name: 'Quincy' }, { name: 'Naomi' }] }, { name: 'Code Radio', users: [{ name: 'Camperbot' }] }, { name: '', users: [] }], 'users')).toBe(true);
});

test('truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data") should return true', () => {
  expect(truthCheck([{ id: 1, data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' } }, { id: 2, data: { url: 'https://coderadio.freecodecamp.org/', name: 'CodeRadio' } }, { id: null, data: {} }], 'data')).toBe(true);
});

test('truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id") should return false', () => {
  expect(truthCheck([{ id: 1, data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' } }, { id: 2, data: { url: 'https://coderadio.freecodecamp.org/', name: 'CodeRadio' } }, { id: null, data: {} }], 'id')).toBe(false);
});
