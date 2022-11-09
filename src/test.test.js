const stringLength = require('./stringLength.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const capitalize = require('./capitalize.js');

describe('stringLength', () => {
  it('works with string length equals to 1', () => {
    expect(stringLength('k')).toBe(1);
  });

  it('throws Error when the string is empty', () => {
    expect(() => stringLength('')).toThrow(Error);
  });

  it('throws Error when the string length equals to 10', () => {
    expect(() => stringLength('khusniddin')).toThrow(Error);
  });

  it('throws Error when the string length is more than 10', () => {
    expect(() => stringLength('khusniddin ismoilov')).toThrow(Error);
  });

  it('returns Error if the parameter is not a string ', () => {
    expect(stringLength(100)).toBe('Error');
  });
});
