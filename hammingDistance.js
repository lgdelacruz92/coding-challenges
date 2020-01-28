var hammingDistance = function(x, y) {
  const xBits = x.toString(2);
  const yBits = y.toString(2);

  let reformatedXBits;
  let reformatedYBits;
  if (xBits.length > yBits.length) {
    const zeros = [];
    for (let i = 0; i < xBits.length - yBits.length; i++) {
      zeros.push(0);
    }
    reformatedXBits = xBits;
    reformatedYBits = zeros.join("") + yBits;
  } else if (yBits.length > xBits.length) {
    const zeros = [];
    for (let i = 0; i < yBits.length - xBits.length; i++) {
      zeros.push(0);
    }
    reformatedXBits = zeros.join("") + xBits;
    reformatedYBits = yBits;
  } else {
    reformatedXBits = xBits;
    reformatedYBits = yBits;
  }

  if (reformatedXBits.length !== reformatedYBits.length) {
    throw Error("This should not happen");
  }

  let diffCount = 0;
  for (let i = 0; i < reformatedYBits.length; i++) {
    if (reformatedYBits[i] !== reformatedXBits[i]) {
      diffCount += 1;
    }
  }
  console.log(diffCount);
  return diffCount;
};

hammingDistance(1, 4);
hammingDistance(20, 4);
