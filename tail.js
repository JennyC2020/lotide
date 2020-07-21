// FUNCTION IMPLEMENTATION
const tail = function (actual, expected) {
  if (actual[0] === expected) {
    console.log(actual.slice(1));
  } else {
    console.log(actual.slice());
  }

  return tail;
};

// TEST CODE
console.assert(tail([5, 6, 7], 5));
console.assert(tail(['Hello', 'Lighthouse', 'Labs'], 'Hello'));
