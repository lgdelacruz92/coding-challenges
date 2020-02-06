const isDigit = c => {
  const num = parseInt(c);
  return !isNaN(num) && 0 <= num && num <= 9;
};

const isChar = c => {
  if (c === undefined) return false;
  return c.length === 1 && c.match(/[a-z]/i);
};

const getDigit = (s, start) => {
  const totalDigits = [];
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (isDigit(c)) {
      totalDigits.push(c);
    } else if (c === "[") {
      break;
    } else {
      throw Error("This should never happen");
    }
  }
  return totalDigits.join("");
};

const getStringToDecode = (s, start) => {
  const stack = [];
  let stackIndex = -1;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (c === "[") {
      stack.push(i);
      stackIndex += 1;
    } else if (c === "]") {
      const top = stack[stackIndex];
      stack.splice(stack.length - 1, 1);
      stackIndex -= 1;

      if (stackIndex === -1) {
        return s.substring(top + 1, i);
      }
    }
  }
};

var decodeString = function(s) {
  if (s.indexOf("[") === -1 && s.indexOf("]") === -1) {
    return s;
  }
  let chars = "";
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (isChar(c)) {
      chars += c;
      i += 1;
    } else if (isDigit(c)) {
      const digit = getDigit(s, i);
      const stringToDecode = getStringToDecode(s, i);
      const decodedString = decodeString(stringToDecode);
      const digitInt = parseInt(digit);
      for (let i = 0; i < digitInt; i++) {
        chars += decodedString;
      }

      i += stringToDecode.length + digit.length + 2;
    } else {
      i += 1;
    }
  }
  return chars;
};

// console.log(getStringToDecode("3[c]2[b]", 0));

console.log(decodeString("3[a2[c3[c]]]"));
console.log(decodeString("3[c]20[b]"));
console.log(decodeString("aaa5[c]2[b]"));
// console.log(getDigit("30[", 0));
// console.log(getDigit("3[", 0));
