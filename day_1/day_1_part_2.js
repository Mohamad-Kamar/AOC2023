const fs = require('fs');
const input = fs.readFileSync('day_1.txt', 'utf-8');
const lines = input.split('\n');

const digits = "one,two,three,four,five,six,seven,eight,nine".split(',')
const digitMap = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0;
for (const line of lines) {
  const letters = line.split('')
  const indexes = [];
  for (const digit of digits) {
    const matchIndexes = [...line.matchAll(new RegExp(digit, 'gi'))].map(a => ({ index: a.index, digit }));
    if (matchIndexes.length) {
      indexes.push(...matchIndexes);
    }
  }
  indexes.sort((a, b) => a.index - b.index);
  const getLeftMostNumberIndex = (letters, notFoundValue = -1) => {
    const index = letters.findIndex((val) => isNaN(+val) === false);
    return index === -1 ? notFoundValue : index;
  }
  const numberFirst = getLeftMostNumberIndex(letters, 100000);
  const letterFirst = indexes[0] ? indexes[0].index : 100000;

  const numberLast = letters.length - getLeftMostNumberIndex(letters.reverse(), -2) - 1;
  const letterLast = indexes[indexes.length - 1] ? indexes[indexes.length - 1].index : -2;

  const resultFirst = numberFirst < letterFirst ? +line[numberFirst] : digitMap[digits.indexOf(indexes[0].digit)];
  const resultLast = numberLast > letterLast ? +line[numberLast] : digitMap[digits.indexOf(indexes[indexes.length - 1].digit)];
  const newNumber = `${resultFirst}${resultLast}`
  sum += +newNumber
}
console.log('Sum of calibration values:', sum)