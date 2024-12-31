function solution(n) {
  var newArray = [];
  newArray = (n + "").split("").sort(function (a, b) {
    return b - a;
  });

  return Number(newArray.join(""));
}
