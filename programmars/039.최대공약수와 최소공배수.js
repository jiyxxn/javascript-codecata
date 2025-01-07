const solution = function (n, m) {
  let maxNum = 0;
  let minNum = 0;

  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      maxNum = i;
    }
  }
  minNum = maxNum * (n / maxNum) * (m / maxNum);
  return [maxNum, minNum];
};
