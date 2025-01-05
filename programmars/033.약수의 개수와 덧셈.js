let solution = function (left, right) {
  let answer = 0;
  let rangeNum = [];

  for (let i = left; i <= right; i++) {
    rangeNum.push(i);
  }
  rangeNum.forEach(function (val, index) {
    const divisorCount = findDivisor(val);

    // 약수의 개수가 짝수면 더하고 홀수면 뺌
    if (divisorCount % 2 === 0) {
      answer += val;
    } else {
      answer -= val;
    }
  });

  return answer;
};

function findDivisor(num) {
  let count = 0;

  for (let j = 0; j <= num; j++) {
    if (num % j === 0) count++;
  }

  return count;
}
