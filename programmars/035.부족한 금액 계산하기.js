const solution = function (price, money, count) {
  let UsageFee = 0;

  for (let i = 1; i <= count; i++) {
    UsageFee += price * i;
  }

  return UsageFee > money ? UsageFee - money : 0;
};
