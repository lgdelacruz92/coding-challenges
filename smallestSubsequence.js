const test = {
  a: ["bcd", "bd", "cd", "d"],
  b: ["cd", "d"],
  c: ["d"],
  d: []
};

const keys = Object.keys(test);
let testContents = [];
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const contents = test[key];
  const newContents = [];
  if (contents.length === 0) {
    newContents.push(key);
  } else {
    for (let j = 0; j < contents.length; j++) {
      newContents.push(key + contents[j]);
    }
  }
  testContents = [...testContents, ...newContents];
}

console.log(testContents);
