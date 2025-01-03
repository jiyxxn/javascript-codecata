function solution(phone_number) {
  var hiddenNumber = "";
  var lastNumber = "";
  var phoneNumber = "";

  hiddenNumber = phone_number.slice(0, phone_number.length - 4);
  lastNumber = phone_number.slice(phone_number.length - 4);

  for (let i = 0; i < hiddenNumber.length; i++) {
    phoneNumber += "*";
  }

  return phoneNumber + lastNumber;
}

solution("01033334444");
solution("027778888");
