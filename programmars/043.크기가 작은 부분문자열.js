const solution = function (t, p) {
  let subStrArr = subStrFunc(t, p.length);
  let count = 0;
  subStrArr.map((item) => {
    if (Number(item) <= Number(p)) count++;
  });
  return count;
};

const subStrFunc = (string, count) => {
  let output = [];
  for (let i = 0; i < string.length; i++) {
    if (string.length - i >= count) output.push(string.substr(i, count));
  }
  return output;
};
