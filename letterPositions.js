// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✳️ ✳️ ✳️ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed:  ${actual} ===  ${expected}`);
  }

  return assertArraysEqual;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};

  for (letters of sentence) {
    results[letters] = [];
  }

  for (var b in results) {
    for (var a = 0; a < sentence.length; a++) {
      if (b === sentence[a]) {
        results[b].push(a);
      }
    }
  }

  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions('hello').e, [1]);
