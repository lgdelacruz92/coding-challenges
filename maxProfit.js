const a = [7, 1, 5, 3, 6, 4];
const b = [7, 6, 5, 4, 3, 2, 1];
const c = [0];

const maxProfit = prices => {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (i !== j) {
        const buy = prices[i];
        const sell = prices[j];
        if (sell - buy > 0 && max < sell - buy) {
          max = sell - buy;
        }
      }
    }
  }
  console.log(max);
};

maxProfit(a);
maxProfit(b);
maxProfit(c);
