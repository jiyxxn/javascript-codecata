const strToNum = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};

function solution(s) {
  const objectEntries = Object.entries(strToNum);
  let answer = s;
  objectEntries.forEach((item) => {
    if (answer.indexOf(item[0]) !== -1) {
      answer = answer.replaceAll(item[0], item[1]);
    }
  });
  return Number(answer);
}
