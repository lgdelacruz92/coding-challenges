const a = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
const b = [0, 1, 2, 1, 1];
const c = [1, 2, 1];
const d = [0, 1, 2, 2];
const e = [1, 2, 3, 2, 2];

const totalFruit = tree => {
  let cache = {};
  let start = 0;
  let max = 0;
  let end = 0;
  for (; end < tree.length; end++) {
    const fruitType = tree[end];
    if (cache[fruitType] === undefined) {
      cache[fruitType] = 1;
    } else {
      cache[fruitType] += 1;
    }

    if (Object.keys(cache).length > 2) {
      // violated
      if (end - start > max) {
        max = end - start;
      }

      while (Object.keys(cache).length > 2) {
        let fruitTypeToRemove = tree[start];
        // delete cache[fruitTypeToRemove];
        if (cache[fruitTypeToRemove] === 1) {
          delete cache[fruitTypeToRemove];
        } else if (cache[fruitTypeToRemove] > 1) {
          cache[fruitTypeToRemove] -= 1;
        }
        start += 1;
      }
    }
  }

  if (end - start > max) {
    max = tree.length - start;
  }
  console.log(max);
  return max;
};

totalFruit(a);
totalFruit(b);
totalFruit(c);
totalFruit(d);
totalFruit(e);

// const test = {
//   a: "test"
// };

// delete test.a;
// console.log(test);
