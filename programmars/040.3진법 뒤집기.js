const solution = function (n) {
  let reverseTernary = n.toString(3).split("").reverse().join("");
  return parseInt(reverseTernary, 3);
};
