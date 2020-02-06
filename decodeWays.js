const a = "12";
const b = "2262";
const c = "222";
const d = "301";
const e = "0";
const f = "10";
const g = "101";
const h = "1";

const decodeWays = (s, start, memo) => {
  if (s[start] === "0") {
    memo[s.substring(start)] = 0;
    return 0;
  }

  if (s.length - 1 === start) {
    memo[s.substring(start)] = 1;
    return 1;
  }
  if (s.substring(start) === "") {
    memo[s.substring(start)] = 1;
    return 1;
  }

  if (memo[s.substring(start)] !== undefined) {
    return memo[s.substring(start)];
  }

  let val = decodeWays(s, start + 1, memo);

  const doubleDigit = s.substring(start, start + 2);
  const doubleDigitInt = parseInt(doubleDigit);
  if (1 <= doubleDigitInt && doubleDigitInt <= 26) {
    val += decodeWays(s, start + 2, memo);
  }
  memo[s.substring(start)] = val;
  return val;
};

const numDecodings = s => {
  const memo = {};
  decodeWays(s, 0, memo);
  return memo[s];
};

console.log(numDecodings(a));
console.log(numDecodings(b));
console.log(numDecodings(c));
console.log(numDecodings(d));
console.log(numDecodings(e));
console.log(numDecodings(f));
console.log(numDecodings(g));
console.log(numDecodings(h));
