// // TEST/ASSERTION FUNCTIONS

const eqArrays = function (array1, array2) {
  if (array1.length === 0 && array2.length === 0) {
    return true;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✳️ ✳️ ✳️ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log('actual', actual);
    console.log('expected', expected);
    console.log(`🔴 🔴 🔴 Assertion Failed:  ${actual} ===  ${expected}`);
  }
};

//Function to find the middleOfArray elements
// function takes in an of number
// returns an array of the middle elements
const middle = function (array) {
  var middleOfArray = Math.floor(array.length / 2); //Split the array in half

  //console.log(array); //log the contents of the array
  //console.log('array length is: ' + array.length);

  if (array.length === 1 || array.length === 2) {
    console.log('[]');
    return [];
  } else if (array.length % 2 === 0) {
    console.log(array[middleOfArray - 1] + ', ' + array[middleOfArray]);
    return [array[middleOfArray - 1], array[middleOfArray]];
  } else {
    console.log(array[middleOfArray]);
    return [array[middleOfArray]];
  }
};
console.log('!!!!!', middle([1]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
