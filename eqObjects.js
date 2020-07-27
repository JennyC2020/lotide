// AssertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✳️ ✳️ ✳️ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed:  ${actual} ===  ${expected}`);
  }

  return assertEqual;
};

//EqArray

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

// Function EqObject
/*
function takes in 2 objects
Function returns true if both objects have identical keys with identical values.
Otherwise you get back a big fat false!
*/

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }

    return true;
  }
};
module.exports = eqObjects;

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);
