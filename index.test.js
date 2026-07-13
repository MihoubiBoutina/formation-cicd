const addition = require('./index');

test('verifie que 2 + 3 est egal a 5', () => {
  expect(addition(2, 3)).toBe(5);
});