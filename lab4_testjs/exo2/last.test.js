// last.test.js

const { last } = require('./last');

// Test case for null array
test('returns an empty array for null input array', () => {
  expect(last(null, 3)).toEqual([]);
});

// Test case for undefined array
test('returns an empty array for undefined input array', () => {
  expect(last(undefined, 3)).toEqual([]);
});

// Test case for null n
test('returns the last element of the array when n is null', () => {
  expect(last([1, 2, 3, 4, 5], null)).toEqual(5);
});

// Test case for n greater than the length of the array
test('returns the entire array when n is greater than the length of the array', () => {
  expect(last([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
});

// Test case for n equal to the length of the array
test('returns the entire array when n is equal to the length of the array', () => {
  expect(last([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
});

// Test case for normal usage
test('returns the last n elements of the array', () => {
  expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
});
