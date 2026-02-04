const romanToInt = (symbol) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < symbol.length; i++) {
    const current = map[symbol[i]];
    const next = map[symbol[i + 1]];
    if (next > current) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};
console.log("Example 1:", romanToInt("III"));
console.log("Example 2:", romanToInt("LVIII"));
console.log("Example 3:", romanToInt("MCMXCIV"));
