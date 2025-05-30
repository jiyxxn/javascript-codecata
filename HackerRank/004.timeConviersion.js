'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const amPm = s.slice(-2);
  const timeWithoutAmPm = s.slice(0, 8);
  const [hours, minutes, seconds] = timeWithoutAmPm.split(':');

  if (amPm.includes('PM') && hours !== '12')
    return `${Number(hours) + 12}:${minutes}:${seconds}`;
  if (amPm.includes('AM') && hours === '12') return `00:${minutes}:${seconds}`;
  return `${hours}:${minutes}:${seconds}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
