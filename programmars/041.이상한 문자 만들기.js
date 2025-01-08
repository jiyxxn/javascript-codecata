const solution = (s) => {
  let stringArray = s.split(" ").map((str) => {
    return str
      .split("")
      .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
      .join("");
  });
  return stringArray.join(" ");
};
