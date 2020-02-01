const a = [1, 2, 3, 1, 5];

const rob2 = (nums, i, history) => {
  if (nums[i] === undefined) {
    return 0;
  }
  if (nums[i + 1] === undefined) {
    return 0 + nums[i];
  }

  if (history[i] !== undefined) {
    return history[i];
  }

  // pick first find max on index 2
  let amt1 = nums[i] + rob2(nums, i + 2, history);
  let amt2 = nums[i + 1] + rob2(nums, i + 3, history);
  if (amt1 > amt2) {
    history[i] = amt1;
    return amt1;
  } else {
    history[i] = amt2;
    return amt2;
  }
};

const rob = nums => {
  let history = {};
  let result = rob2(nums, 0, history);
  console.log(result);
};

rob(a);
