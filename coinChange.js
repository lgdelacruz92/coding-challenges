const coinChangeMemo = (coins, amount, memo) => {
  if (amount === 0) {
    return 0;
  }

  if (coins.indexOf(amount) >= 0) {
    return 1;
  }

  if (memo[amount] !== undefined) {
    return memo[amount];
  }

  let results = [];
  for (let i = 0; i < coins.length; i++) {
    if (amount - coins[i] >= 0) {
      results.push(coinChangeMemo(coins, amount - coins[i], memo) + 1);
    }
  }

  let min = Math.min(...results);
  memo[amount] = min;
  return min;
};

const coinChange = (coins, amount) => {
  let memo = {};
  const min = coinChangeMemo(coins, amount, memo);
  if (min === Infinity) {
    return -1;
  }
  return min;
};

console.log(coinChange([1, 2, 5], 3));
console.log(coinChange([1, 2, 5], 4));
console.log(coinChange([1, 2, 5], 5));
console.log(coinChange([1, 2, 5], 6));
console.log(coinChange([1, 2, 5], 20));
console.log(coinChange([2], 3));

console.time("long");
console.log(coinChange([1, 2, 5], 100));
console.timeEnd("long");
