/**
 * This explores what happens in recursion step by step
 */

const recurse = (s, i) => {
  if (s.length - 1 === i) {
    return [s[i]];
  }

  const c = s[i];
  const results = [];
  for (let j = i + 1; j < s.length; j++) {
    results.push(recurse(s, j));
  }
  return [c, ...results];
};

recurse("abcd", 0);
