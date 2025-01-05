function solution(s) {
  var answer = "";
  var strArray = [];
  strArray = s.split("");

  strArray.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });
  strArray.forEach(function (item) {
    answer += item;
  });

  return answer;
}
