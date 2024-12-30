function solution(n) {
  let numArray = String(n).split("");
  let answer = 0;
  numArray.forEach(function (item) {
    answer += Number(item);
  });
  return answer;
}
