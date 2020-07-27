// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual[0] === expected) {
    console.log(actual[0]);
  } else {
    console.log(actual[0]);
  }

  return assertEqual;
};


// Function head
const head = function(array) {
  return array[0];
};

// TEST CODE
console.assert(assertEqual([5, 6, 7], 5));
console.assert(assertEqual(['Hello', 'Lighthouse', 'Labs'], 'Hello'));
