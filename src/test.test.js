import stringLength from './stringLength.js';
import reverseString from './reverseString.js';
import Calculator from './calculator.js';
import capitalize from './capitalize.js';

describe(stringLength, () => {
  test('works with string length equals to 1', () => {
    expect(stringLength('k')).toBe(1);
  });

  test('throws Error when the string is empty', () => {
    expect(() => stringLength('')).toThrow(Error);
  });

  test('throws Error when the string length equals to 10', () => {
    expect(() => stringLength('khusniddin')).toThrow(Error);
  });

  test('throws Error when the string length is more than 10', () => {
    expect(() => stringLength('khusniddin ismoilov')).toThrow(Error);
  });
});

test('Khusniddin is reversed and results niddinsuhK', () => {
  expect(reverseString('Khusniddin')).toBe('niddinsuhK');
});

test('Good job is reversed and results boj dooG', () => {
  expect(reverseString('Good job')).toBe('boj dooG');
});

describe('Calculator add method', () => {
  test('expect 2 + 2 equals to 4', () => {
    expect(Calculator.add(2, 2)).toBe(4);
  });

  test('expect 2 + (-1) equals to 1', () => {
    expect(Calculator.add(2, -1)).toBe(1);
  });

  test('expect (-2) + (-1) equals to (-3)', () => {
    expect(Calculator.add(-2, -1)).toBe(-3);
  });
});

describe('Calculator subtract method', () => {
  test('expect 2 - 2 equals to 0', () => {
    expect(Calculator.subtract(2, 2)).toBe(0);
  });

  test('expect 2 - (-1) equals to 3', () => {
    expect(Calculator.subtract(2, -1)).toBe(3);
  });

  test('expect (-2) - (-1) equals to (-1)', () => {
    expect(Calculator.subtract(-2, -1)).toBe(-1);
  });
});

describe('Calculator multiply method', () => {
  test('expect 2 * 2 equals to 4', () => {
    expect(Calculator.multiply(2, 2)).toBe(4);
  });

  test('expect 2 * (-1) equals to (-2)', () => {
    expect(Calculator.multiply(2, -1)).toBe(-2);
  });

  test('expect (-2) * (-1) equals to 2', () => {
    expect(Calculator.multiply(-2, -1)).toBe(2);
  });
});

describe('Calculator divide method', () => {
  test('expect 10 / 2 equals to 5', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
  });

  test('expect 2 / (-1) equals to (-2)', () => {
    expect(Calculator.divide(2, -1)).toBe(-2);
  });

  test('expect 9 / 3 equals to 3', () => {
    expect(Calculator.divide(9, 3)).toBe(3);
  });
});

test('khusniddin is capitalized and results Khusniddin', () => {
  expect(capitalize('khusniddin')).toBe('Khusniddin');
});