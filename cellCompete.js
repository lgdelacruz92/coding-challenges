function cellCompete(states, days) {
  let statesCopy = [...states];
  let newState = [];
  for (let i = 0; i < days; i++) {
    for (let j = 0; j < statesCopy.length; j++) {
      if (j === 0) {
        const neighborAhead = statesCopy[j + 1];
        if (neighborAhead === 0) {
          newState.push(0);
        } else {
          newState.push(1);
        }
      } else if (j === statesCopy.length - 1) {
        const neighborPrevious = statesCopy[j - 1];
        if (neighborPrevious === 0) {
          newState.push(0);
        } else {
          newState.push(1);
        }
      } else {
        const neighborAhead = statesCopy[j + 1];
        const neighborPrevious = statesCopy[j - 1];
        if (neighborPrevious === neighborAhead) {
          newState.push(0);
        } else {
          newState.push(1);
        }
      }
    }
    statesCopy = [];
    statesCopy = [...newState];
    newState = [];
  }
  return statesCopy;
}

// console.log(cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1));
console.log(cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2));
