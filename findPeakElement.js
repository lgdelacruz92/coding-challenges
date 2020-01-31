const a = [7, 8, 9, 7, 8, 9];
const b = [0];
const c = [2, 1];

const findPeakElementRecurse = (nums, start, end, history) => {
  if (end - start <= 1) {
    const val = nums[start];
    let isPeak = false;
    if (nums[start - 1] !== undefined) {
      isPeak = nums[start - 1] < val;
    } else {
      isPeak = true;
    }

    if (nums[start + 1] !== undefined) {
      isPeak = isPeak && nums[start + 1] < val;
    }

    if (nums[start - 1] === undefined && nums[start + 1] === undefined) {
      isPeak = true;
    }

    if (isPeak) {
      history.push(start);
    }

    return;
  }

  const mid = Math.floor((end - start) / 2) + start;
  findPeakElementRecurse(nums, start, mid, history);
  findPeakElementRecurse(nums, mid, end, history);
};

const findPeakElement = nums => {
  let history = [];
  findPeakElementRecurse(nums, 0, nums.length, history);
  if (history.length > 0) {
    return history[0];
  } else {
    return "no peak";
  }
};

console.log(findPeakElement(b));
console.log("-----");
console.log(findPeakElement(a));
console.log("-----");
console.log(findPeakElement(c));
