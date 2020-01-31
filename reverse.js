const reverse = x => {
  let result = [];
  let neg = false;
  let curVal;
  if (x < 0) {
    curVal = x * -1;
    neg = true;
  } else {
    curVal = x;
  }

  while (curVal > 0) {
    let remainder = curVal % 10;
    curVal -= remainder;
    curVal /= 10;
    result.push(remainder);
  }

  if (result.length > 0) {
    const val = parseInt(result.join(""));
    if (val > 2147483647) {
      return 0;
    }
    if (neg) {
      return -1 * val;
    } else {
      return val;
    }
  } else {
    return 0;
  }
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
