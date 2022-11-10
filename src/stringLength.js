function stringLength(string) {
  if (string.length >= 1 && string.length < 10) {
    return string.length;
  }
  throw new Error('String must be at least 1 character long and not longer than 10 characters');
}

export default stringLength;