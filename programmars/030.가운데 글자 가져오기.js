let solution = function (s) {
  let answer = "";

  s.length % 2 == 0
    ? (answer =
        s.charAt(Math.floor(s.length / 2) - 1) +
        s.charAt(Math.floor(s.length / 2)))
    : (answer = s.charAt(Math.floor(s.length / 2)));
  return answer;
};
