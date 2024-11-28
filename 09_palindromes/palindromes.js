const palindromes = function (str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
