// // FUNCTION assertEqual
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✳️ ✳️ ✳️ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed:  ${actual} ===  ${expected}`);
  }

  // return assertEqual;
};

// FUNCTION CountLetters
/*
Function takes in a string
Function return a object for each letter with the number as value
*/

function countLetters(string) {
  const chars = {};

  let maxChar = '';
  let maxValue = 1;

  string = string.replace(/\s+/g, '');

  for (let char of string) {
    chars[char] = chars[char] + 1 || 1;
  }

  return chars;
}

assertEqual(countLetters('lighthouse in the house'), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
assertEqual(countLetters('lighthouse in the house'), {
  l: 4,
  i: 2,
  g: 1,
  h: 7,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
