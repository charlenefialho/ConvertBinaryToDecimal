const convertBinaryToDecimal = require('../test/convertBinaryToDecimal');

test('adds [1,0] to equal 2', () => {
  expect(convertBinaryToDecimal([1,0])).toBe(2);
});