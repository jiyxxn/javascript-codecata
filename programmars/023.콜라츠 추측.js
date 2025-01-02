function solution(num, count = 0) {
  if (num === 1) return 0;
  else {
    while (num != 1) {
      num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
      count++;
    }
  }

  return count >= 500 ? -1 : count;
}
