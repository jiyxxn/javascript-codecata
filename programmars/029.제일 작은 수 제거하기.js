let solution = function (arr) {
  if (arr.length <= 1) return [-1];
  arr = arr.filter((e) => e !== Math.min(...arr));
  return arr;
};
