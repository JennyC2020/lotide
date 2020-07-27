// // Function MAP

// /*
// Function takes in 2 arguments
// array and a function

// function will return a new array based on the results of the callback function
// */

// // FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✳️ ✳️ ✳️ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed:  ${actual} ===  ${expected}`);
  }

  return assertEqual;
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

// New Map function

const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

const results1 = map(words, (word) => word[0]);

console.log(results1);
