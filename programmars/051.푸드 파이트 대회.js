const solution = (food) => {
  const str = '';
  food.shift();
  const forOnePersonFood = food.map((item) => Math.trunc(item / 2));

  let numArr = forOnePersonFood.map((item, index) =>
    str.padStart(item, index + 1)
  );

  numArr = [...numArr, ...numArr.reverse()];
  numArr.splice(numArr.length / 2, 0, '0');
  return numArr.join('');
};
