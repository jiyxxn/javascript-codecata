function solution(nums) {
  var count = 0;
  const nCr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        nCr.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  nCr.forEach((item) => {
    const sum = item.reduce((acc, cur) => acc + cur);

    if (sum < 2) return;
    for (let i = 2; i <= Math.sqrt(sum); i++) {
      if (sum % i === 0) return;
    }
    count++;
  });

  return count;
}
