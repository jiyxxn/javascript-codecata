function solution(cards1, cards2, goal) {
  var answer = '';

  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
      answer = 'Yes';
      continue;
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
      answer = 'Yes';
      continue;
    } else {
      answer = 'No';
      break;
    }
  }

  return answer;
}
