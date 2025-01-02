function solution(arr, divisor) {
  var answer = [];

  arr.forEach(function (item) {
    if (item % divisor === 0) answer.push(item);
  });

  return answer.length !== 0 ? answer.sort(compareNum) : [-1];
}

function compareNum(a, b) {
  return a - b;
}
