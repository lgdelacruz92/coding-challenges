const a = [
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4]
];

const b = [
  [1, 1],
  [2, 2],
  [3, 3]
];

const c = [
  [0, 0],
  [1, 1],
  [0, 0]
];

const d = [
  [0, 0],
  [1, 1],
  [1, -1]
];

const e = [
  [-4, 1],
  [-7, 7],
  [-1, 5],
  [9, -25]
];

const f = [
  [4, 0],
  [4, -1],
  [4, 5]
];

const g = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 4],
  [3, 3]
];

const h = [
  [0, 0],
  [94911151, 94911150],
  [94911152, 94911151]
];

const gcd = (num1, num2) => {
  if (num2 % num1 === 0) {
    return num1;
  } else if (num1 % num2 === 0) {
    return num2;
  } else {
    let gcd = 1;
    for (let i = 1; i < Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        if (i > gcd) {
          gcd = i;
        }
      }
    }
    return gcd;
  }
};

const slope = (p1, p2) => {
  const numerator = p2[1] - p1[1];
  if (p2[0] - p1[0] === 0) {
    return "infinity";
  }
  const denominator = p2[0] - p1[0] === 0 ? 1 : p2[0] - p1[0];
  const gcdVal = gcd(numerator, denominator);
  return [numerator / gcdVal, denominator / gcdVal];
};

const makeKeyFromSlope = slope => {
  return `${slope[0]}/${slope[1]}`;
};

const calcB = (slope, p) => {
  if (slope === "infinity") {
    return p[0];
  }
  const x = p[0];
  const y = p[1];
  return y - (slope[0] / slope[1]) * x;
};

const maxPoints = points => {
  if (points.length === 0) {
    return 0;
  }
  if (points.length === 1) {
    return 1;
  }
  const mapBySlopes = {};
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const p1 = points[i];
        const p2 = points[j];
        const slopeVal = slope(p1, p2);
        const slopeAsKey = makeKeyFromSlope(slopeVal);
        const b = calcB(slopeVal, p1);
        const mapKey = `${slopeAsKey}_${b}`;
        if (mapBySlopes[mapKey] === undefined) {
          mapBySlopes[mapKey] = {
            keys: new Set(),
            b: b
          };
        }
        mapBySlopes[mapKey].keys.add(i);
        mapBySlopes[mapKey].keys.add(j);
      }
    }
  }
  let max = 0;
  Object.keys(mapBySlopes).forEach(key => {
    if (mapBySlopes[key].keys.size > max) {
      max = mapBySlopes[key].keys.size;
    }
  });
  console.log(max);
  return max;
};

maxPoints(a);
maxPoints(b);
maxPoints(c);
maxPoints(d);
maxPoints(e);
maxPoints(f);
maxPoints(g);
maxPoints(h);
// console.log(gcd(1, 2));
// console.log(gcd(2, 10));
// console.log(gcd(8, 20));
// console.log(slopeKey([1, 1], [2, 2]));
// console.log(slopeKey([1, 1], [4, 4]));
// console.log(calcB(slopeKey([1, 1], [2, 2]), [2, 2]));
// console.log(calcB(slopeKey([1, 1], [4, 4]), [4, 4]));
