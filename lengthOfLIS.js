const f = (a, curIndex, memo) => {
  if (memo[a[curIndex]] !== undefined) {
    return memo[a[curIndex]];
  }

  if (curIndex === a.length - 1) {
    return { lastValIndex: curIndex, lastCount: 1 };
  }

  const results = [];
  for (let i = curIndex; i < a.length - 1; i++) {
    const { lastValIndex, lastCount } = f(a, i + 1, memo);
    if (a[i] <= a[lastValIndex]) {
      results.push({ lastValIndex: i, lastCount: lastCount + 1 });
    } else {
      results.push({ lastValIndex, lastCount });
    }
  }

  console.log(memo);

  let max = { lastValIndex: -1, lastCount: 0 };
  for (let i = 0; i < results.length; i++) {
    if (max.lastCount < results[i].lastCount) {
      max = results[i];
    }
  }
  memo[a[curIndex]] = max;
  return max;
};

var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) {
    return 1;
  }
  const memo = {};
  f(nums, 0, memo);
  return memo[nums[0]].lastCount;
};

// console.log(lengthOfLIS([1, 2, 3]));
// console.log(lengthOfLIS([3, 2, 1]));
// console.log(lengthOfLIS([1, 2, 3, 4]));
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
// console.log(lengthOfLIS([0]));
console.log(lengthOfLIS([2, 2]));
