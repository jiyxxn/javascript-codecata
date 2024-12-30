function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n == 0) answer == 0;
    else {
      if (n % i === 0) answer += i;
    }
  }

  return answer;
}
