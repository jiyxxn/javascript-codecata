const solution = (s, n) => {
  return s
    .split("")
    .map((char) => {
      if (char === " ") return char; // 공백은 그대로 반환
      const base = char >= "a" ? "a".charCodeAt() : "A".charCodeAt(); // 소문자/대문자 기준값 설정
      return String.fromCharCode(((char.charCodeAt() - base + n) % 26) + base);
    })
    .join("");
};

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"
