const test = [2, 1, 5, 3, 4];
const test2 = [2, 5, 1, 3, 4];

const minimumBribes = q => {
  let minBribe = 0;

  // [ 1, 0, 4, 2, 3]
  for (let i = 0; i < q.length; i++) {
    // i e 1...5
    // let P : the original position
    // let i : the current position
    // we can count the number p has been bribed

    // lets get rid of 'too chaotic case'
    const P = q[i];
    if (P - 1 - i > 2) {
      console.log("Too chaotic");
      return;
    } else {
      for (let j = P - 2; j < i; j++) {
        // let B: the potential briber
        if (j >= 0) {
          const B = q[j];
          if (B > P) {
            minBribe += 1;
          }
        }
      }
    }
  }
  console.log(minBribe);
};

minimumBribes(test);
minimumBribes(test2);
