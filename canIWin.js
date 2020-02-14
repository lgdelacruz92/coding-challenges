const canIWinHelper = (
  maxChoosableInteger,
  desiredTotal,
  firstPlayer,
  history
) => {
  console.log("current total", desiredTotal);
  if (desiredTotal <= 0) {
    if (firstPlayer) {
      console.log("first player wins");
    } else {
      console.log("second player wins");
    }
    return;
  }
  for (let i = 1; i <= maxChoosableInteger; i++) {
    if (history[i - 1] === false) {
      history[i - 1] = true;
      canIWinHelper(
        maxChoosableInteger,
        desiredTotal - i,
        !firstPlayer,
        history
      );
      history[i - 1] = false;
    }
  }
};

var canIWin = function(maxChoosableInteger, desiredTotal) {
  const history = [];
  for (let i = 0; i < maxChoosableInteger; i++) {
    history.push(false);
  }
  canIWinHelper(maxChoosableInteger, desiredTotal, true, history);
};

canIWin(10, 11);
