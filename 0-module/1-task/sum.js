function sum(a, b) {
  if (![a, b].every((item) => typeof item === 'number')) throw new TypeError();
  return a + b;
}

module.exports = sum;
