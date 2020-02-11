const findPeak = (a, is, ie, js, je) => {
  const yHalf = Math.floor((ie - is) / 2) + is;
  const xHalf = Math.floor((je - js) / 2) + js;

  const val = a[yHalf][xHalf];
  console.log(val, yHalf, xHalf);
};

findPeak(a, 0, 5, 0, 5);
