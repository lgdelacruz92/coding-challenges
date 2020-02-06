var lengthOfLIS = function(nums) {
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp.push(1);
  }

  for (let i = 0; i < nums.length; i++) {
    const possibleNums = [];
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        possibleNums.push(dp[i] + dp[j]);
      }
    }
    if (possibleNums.length > 0) {
      const max = Math.max(...possibleNums);
      dp[i] = max;
    }
  }
  return Math.max(...dp);
};

console.log(lengthOfLIS([1, 2, 3]));
console.log(lengthOfLIS([3, 2, 1]));
console.log(lengthOfLIS([1, 2, 3, 4]));
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
console.log(lengthOfLIS([0]));
console.log(lengthOfLIS([2, 2]));
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
