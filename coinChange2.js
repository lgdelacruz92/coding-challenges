const coinChange = (coins, amount) => {
  const dp = [];
  for (let i = 0; i <= amount; i++) {
    dp.push(Number.MAX_SAFE_INTEGER);
  }
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    coins.forEach(coin => {
      const change = i - coin;
      if (change >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    });
  }
  // console.log(dp);
  if (dp[amount] === Number.MAX_SAFE_INTEGER) {
    return -1;
  }
  return dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([2], 4));
console.log(coinChange([5], 21));
console.log(coinChange([2, 5, 10, 1], 27));
