const solution = (numbers) => {
  let answer = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) break;

      answer.add(numbers[i] + numbers[j]);
    }
  }

  answer = [...answer].sort((a, b) => a - b);

  return answer;
};
