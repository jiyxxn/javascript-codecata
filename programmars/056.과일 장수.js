function solution(k, m, score) {
  score.sort((a, b) => b - a);

  const appleBox = [];

  while (score.length >= m) {
    const appleBundle = score.splice(0, m);
    appleBox.push(appleBundle);
  }

  const answer = appleBox.reduce((prev, cur) => {
    return prev + Math.min(...cur) * m;
  }, 0);

  return answer;
}
