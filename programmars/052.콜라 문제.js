function solution(a, b, n) {
  let answer = 0;

  let emptyCoke = n;

  while (emptyCoke >= a) {
    let newEmptyCoke = Math.trunc(emptyCoke / a) * b;
    answer += newEmptyCoke;
    emptyCoke = newEmptyCoke + (emptyCoke % a);
  }
  return answer;
}
