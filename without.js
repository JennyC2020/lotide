/* To do

*/

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✳️ ✳️ ✳️ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed:  ${actual} ===  ${expected}`);
  }

  return assertArraysEqual;
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

const without = function (source, itemsToRemove) {
  let finalArray = source;
  itemsToRemove.forEach((toRemove) => {
    finalArray = finalArray.filter((elem) => elem !== toRemove);
  });
  return finalArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(['1', '2', '3'], [1, 2, '3'])); // => ["1", "2"]
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
