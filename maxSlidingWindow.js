var maxSlidingWindow = function(nums, k) {
  for (let i = 0; i < nums.length - k; i++) {
    console.log(nums[i]);
  }
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
