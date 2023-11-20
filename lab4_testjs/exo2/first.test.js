// first.test.js

const { first } = require('./first');

test('returns the first n elements of an array', () => {
  // Test case 1: Valid array and positive n
  expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);

  // Test case 2: Valid array and n is greater than the array length
  expect(first([1, 2, 3], 5)).toEqual([1, 2, 3]);

  // Test case 3: Valid array and n is 0
  expect(first([1, 2, 3], 0)).toEqual([]);

  // Test case 4: Valid array and n is null (return the first element)
  expect(first([1, 2, 3])).toEqual(1);

  // Test case 5: Empty array (should return an empty array)
  expect(first([], 3)).toEqual([]);

  // Test case 6: Null array (should return an empty array)
  expect(first(null, 3)).toEqual([]);

  // Test case 7: Null array and n is null (should return an empty array)
  expect(first(null)).toEqual([]);
});
