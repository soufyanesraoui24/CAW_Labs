const { chunk } = require('./chunk');

test('divides an array into sub-arrays of predefined size', () => {
  // Test case 1
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);

  // Test case 2
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);

  // Test case 3
  expect(chunk([10, 20, 30, 40, 50, 60], 4)).toEqual([[10, 20, 30, 40], [50, 60]]);

  // Test case 4
  expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);

  // Test case 5
  expect(chunk([], 2)).toEqual([]);

  // Test case 6
  expect(chunk(['a', 'b', 'c'], 1)).toEqual([['a'], ['b'], ['c']]);
});
