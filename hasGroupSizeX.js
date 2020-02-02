const a = [1, 2, 3, 4, 4, 3, 2, 1];
const b = [1, 1, 1, 2, 2, 2, 3, 3];
const c = [1];
const d = [1, 1];
const e = [1, 1, 2, 2, 2, 2];
const f = [1, 1, 1, 2, 2, 2];

const gcd = (num1, num2) => {
  if (num2 % num1 === 0) {
    return num1;
  } else if (num1 % num2 === 0) {
    return num2;
  } else {
    const min = Math.min(num1, num2);
    let gcd = 1;
    for (let i = 1; i <= min; i++) {
      if (num2 % i === 0 && num1 % i === 0) {
        if (gcd < i) {
          gcd = i;
        }
      }
    }
    return gcd;
  }
};

const gcd2 = a => {
  const min = Math.min(...a);
  if (min > 0) {
    let gcd = 1;

    for (let i = 1; i <= min; i++) {
      let allDivisibleByI = true;
      for (let x = 0; x < a.length; x++) {
        if (a[x] % i !== 0) {
          allDivisibleByI = false;
          break;
        }
      }
      if (allDivisibleByI && gcd < i) {
        gcd = i;
      }
    }

    return gcd;
  } else {
    return 1;
  }
};

const hasGroupSizeX = deck => {
  if (deck.length === 0) {
    return false;
  }

  const record = {};
  for (let i = 0; i < deck.length; i++) {
    if (record[deck[i]] === undefined) {
      record[deck[i]] = 1;
    } else {
      record[deck[i]] += 1;
    }
  }

  const keys = Object.keys(record);
  if (keys.length === 1) {
    return record[keys[0]] >= 2;
  } else if (keys.length > 0) {
    const counts = [];
    keys.forEach(key => {
      counts.push(record[key]);
    });
    return gcd2(counts) >= 2;
  } else {
    return false;
  }
};

console.log(hasGroupSizeX(a));
console.log(hasGroupSizeX(b));
console.log(hasGroupSizeX(c));
console.log(hasGroupSizeX(d));
console.log(hasGroupSizeX(e));
console.log(hasGroupSizeX(f));

// // console.log(gcd2([]));
// console.log(gcd2([3, 3, 2]));
// console.log(gcd2([2, 4]));
// console.log(gcd2([5, 10, 20]));
