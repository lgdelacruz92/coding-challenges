const a = ["a", "b"];
function reverseArray(a) {
  let result = [];
  for (let i = a.length - 1; i >= 0; i--) {
    result.push(a[i]);
  }
  return result.join(" ");
}

console.log(reverseArray(a));
