const gcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};

const allGCD = (min, max) => {
  const all = new Set();
  for (let i = 1; i <= min; i++) {
    const gcdNum = gcd(i, max);
    all.add(gcdNum);
  }
  return Array.from(all);
};

function generalizedGCD(num, arr) {
  if (num === 1) {
    return arr[0];
  }

  if (num === 0) {
    return 0;
  }

  if (arr.indexOf(0) !== -1) {
    return 0;
  }

  const min = Math.min(...arr);
  const hash = {};
  for (let i = 0; i < num; i++) {
    const allfactors = allGCD(min, arr[i]);
    allfactors.forEach(f => {
      if (hash[f] === undefined) {
        hash[f] = 1;
      } else {
        hash[f] += 1;
      }
    });
  }

  const targetNum = num;

  let maxWithTargetNum = Number.NEGATIVE_INFINITY;
  Object.keys(hash).forEach(key => {
    const item = hash[key];
    const keyNum = parseInt(key);
    if (item === targetNum && keyNum > maxWithTargetNum) {
      maxWithTargetNum = keyNum;
    }
  });
  return maxWithTargetNum;
}

console.log(generalizedGCD(5, [2, 4, 6, 8, 10]));
console.log(generalizedGCD(1, [2]));
console.log(generalizedGCD(0, []));
console.log(generalizedGCD(2, [2, 2]));
console.log(generalizedGCD(4, [2, 2, 2, 0]));
console.log(generalizedGCD(4, [6, 2, 2, 20]));
