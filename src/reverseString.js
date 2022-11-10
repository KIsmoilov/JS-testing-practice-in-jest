const reverseString = (string) => {
  const reverseStringResult = string.split('').reverse().join('');
  return reverseStringResult;
};

export default reverseString;