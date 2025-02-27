function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5], // 1번 수포자
    [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자
  ];

  const scores = [0, 0, 0]; // 맞힌 개수를 저장할 배열

  // 각 수포자의 패턴과 정답 비교
  answers.forEach((answer, i) => {
    patterns.forEach((pattern, index) => {
      if (answer === pattern[i % pattern.length]) {
        scores[index]++; // 정답일 경우 카운트 증가
      }
    });
  });

  const maxScore = Math.max(...scores); // 최고 점수 찾기
  return scores
    .map((score, index) => (score === maxScore ? index + 1 : null)) // 최고 점수인 사람만 필터링
    .filter(Number);
}
