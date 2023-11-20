// concatenate.test.js

const { concatenateStrings } = require('./concatenate');

test('concatenates the elements of an array of strings', () => {
  const myColor = ["Red", "Green", "White", "Black"];

  // Test using toString()
  const result1 = myColor.toString();
  const expectedResult1 = "Red,Green,White,Black";
  expect(result1).toEqual(expectedResult1);

  // Test using join() without a separator
  const result2 = myColor.join();
  const expectedResult2 = "Red,Green,White,Black";
  expect(result2).toEqual(expectedResult2);

  // Test using join() with an empty string separator
  const result3 = myColor.join('');
  const expectedResult3 = "RedGreenWhiteBlack";
  expect(result3).toEqual(expectedResult3);

});
