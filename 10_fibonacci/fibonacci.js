const fibonacci = function (num) {
  const n = parseInt(num, 10);

  if (n < 0 || isNaN(n)) return "OOPS";
  if (n <= 1) return n;

  currValue = 1;
  prevValue = 0;

  for (let i = 2; i <= n; i++) {
    let next = currValue + prevValue;
    prevValue = currValue;
    currValue = next;
  }
  return currValue;
};

// Do not edit below this line
module.exports = fibonacci;
