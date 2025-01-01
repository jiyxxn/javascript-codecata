// 초기 풀이
// function solution(x) {
//   let numArray = (x + "").split("");
//   let addNum = 0;

//   // for (let i = 0; i < numArray.length; i++) {
//   //   addNum += Number(numArray[i]);
//   // }

//   return x % addNum === 0 ? true : false;
// }

function solution(x) {
  let addNum = (x + "")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

  return x % addNum === 0 ? true : false;
}
