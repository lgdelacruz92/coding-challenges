const isSpace = c => {
  return c === " ";
};

const isDash = c => {
  return c === "-";
};

const isDigit = c => {
  return c !== undefined && !isNaN(parseInt(c));
};

const isIn32BitRange = n => {
  return -Math.pow(2, 31) <= n && n <= Math.pow(2, 31) - 1;
};

const isPlus = c => {
  return c === "+";
};

var myAtoi = function(str) {
  let isNeg = false;
  const digits = [];

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (isSpace(c)) {
      if (digits.length > 0) {
        break;
      }
      continue;
    } else if (isDash(c)) {
      if (digits.length > 0) {
        break;
      }
      if (isDigit(str[i + 1])) {
        isNeg = true;
      } else {
        break;
      }
    } else if (isPlus(c)) {
      if (digits.length > 0) {
        break;
      }
      if (!isDigit(str[i + 1])) {
        break;
      }
    } else if (!isDigit(c)) {
      break;
    } else {
      digits.push(c);
    }
  }

  if (digits.length > 0) {
    let curPow = 0;
    let runningTotal = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
      const base = Math.pow(10, curPow);
      runningTotal += base * parseInt(digits[i]);
      curPow += 1;
    }

    if (isIn32BitRange(runningTotal)) {
      // console.log(isNeg, digits, runningTotal, "in range");
      if (isNeg) {
        return -1 * runningTotal;
      }
      return runningTotal;
    } else {
      // console.log(isNeg, digits, runningTotal, "not in range");
      if (isNeg) {
        return -Math.pow(2, 31);
      }
      return Math.pow(2, 31) - 1;
    }
  } else {
    // console.log("not valid", str);
    return 0;
  }
};

console.log(myAtoi("-4"));
console.log(myAtoi("--"));
console.log(myAtoi("  -wdafd"));
console.log(myAtoi("  -4"));
console.log(myAtoi("4193"));
console.log(myAtoi("words and 987"));
console.log(myAtoi(" ---4"));
console.log(myAtoi(""));
console.log(myAtoi("    12313"));
console.log(myAtoi("91283472332"));
console.log(myAtoi("  -91283472332"));
console.log(myAtoi("  -91283472332"));
console.log(myAtoi("  -42 dfas"));
console.log(myAtoi("  +42 dfas"));
console.log(myAtoi("  ++42 dfas"));
console.log(myAtoi("+1"));
console.log(myAtoi(" +0 123"));
console.log(myAtoi("0-1"));
// myAtoi("4193 words");
