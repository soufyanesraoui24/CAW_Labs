// echo.test.js

const { exf } = require('./echo');

describe('exf function', () => {
  test('prints the string n times', () => {
    const originalLog = console.log;
    console.log = jest.fn();

    exf('Hello, World!', 3);

    console.log = originalLog;

  });

  test('prints nothing for n = 0', () => {
    const originalLog = console.log;
    console.log = jest.fn();

    exf('Should not be printed', 0);

    console.log = originalLog;

  });

  test('prints an empty string for n = 1', () => {
    const originalLog = console.log;
    console.log = jest.fn();

    exf('', 1);

    // Restore console.log
    console.log = originalLog;

  });

  test('prints an empty string multiple times for n > 1', () => {
    const originalLog = console.log;
    console.log = jest.fn();

    exf('', 5);

    // Restore console.log
    console.log = originalLog;

  });
});
