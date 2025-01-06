// const solution = function (s) {
//   let isLengthTrue = s.length === 4 || s.length === 6;

//   return isLengthTrue && !isNaN(s) ? true : false;
// };

const solution = function (s) {
  let isLengthTrue = s.length === 4 || s.length === 6;
  let isNumeric = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] < "0" || s[i] > "9") {
      isNumeric = false;
      break;
    }
  }

  return isLengthTrue && isNumeric;
};

solution("a234");
solution("12SF34");
