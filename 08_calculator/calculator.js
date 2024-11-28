const add = function (x, y) {
  if (x >= 0 && y >= 0) {
    return x + y;
  }
  return false;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function (a, b) {
  if (b < 0) return false;
  return a ** b;
};

const factorial = function (n) {
  return n === 0 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
