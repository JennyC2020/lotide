const middle = function(array) {
  var middleOfArray = Math.floor(array.length / 2);

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
module.exports = middle;
