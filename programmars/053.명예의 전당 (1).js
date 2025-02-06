function solution(k, score) {
  var answer = [];
  var winedScore = [];
  for (let i = 0; i < score.length; i++) {
    if (winedScore.length >= k) {
      winedScore.sort((a, b) => a - b);

      if (winedScore[0] < score[i]) {
        winedScore.shift();
        winedScore.push(score[i]);
      }
    } else {
      winedScore.push(score[i]);
    }
    winedScore.sort((a, b) => a - b);
    answer.push(winedScore[0]);
  }
  return answer;
}
