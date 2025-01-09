function solution(number) {
  const combinations = getCombinations(number, 3); // 3개의 요소를 선택
  let count = 0;
  combinations.forEach((combination) => {
    const sum = combination.reduce((acc, curr) => acc + curr, 0); // 합 계산
    if (sum === 0) count++; // 합이 0이면 카운트 증가
  });
  return count;
}

function getCombinations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((value) => [value]);
  const combinations = [];
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const smallerCombinations = getCombinations(rest, selectNumber - 1);
    const attached = smallerCombinations.map((combination) => [
      fixed,
      ...combination,
    ]);
    combinations.push(...attached);
  });
  return combinations;
}

// 테스트
console.log(solution([-2, 3, 0, 2, -5])); // 출력: 2
