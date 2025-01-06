const solution = function (arr1, arr2) {
  let array = [];
  for (let i = 0; i < arr1.length; i++) {
    let smallArray = [];
    for (let j = 0; j < arr1[i].length; j++) {
      smallArray.push(arr1[i][j] + arr2[i][j]);
    }
    array.push(smallArray);
  }
  return array;
};
