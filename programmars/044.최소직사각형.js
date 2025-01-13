const solution = function (sizes) {
  const sortedSizes = sizes.map((card) =>
    card[0] > card[1] ? [card[0], card[1]] : [card[1], card[0]]
  );

  const maxWidth = Math.max(...sortedSizes.map((card) => card[0]));
  const maxHeight = Math.max(...sortedSizes.map((card) => card[1]));

  return maxWidth * maxHeight;
};
