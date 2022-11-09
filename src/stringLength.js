function stringLength(string) {
  if (typeof string !== 'string') {
    return 'Error';
  }
  const result = [...string].length;

  if (result < 1 || result >= 10) {
    throw new Error('String must be at least 1 character long and not longer than 10 characters');
  }

  return result;
}

module.exports = stringLength;