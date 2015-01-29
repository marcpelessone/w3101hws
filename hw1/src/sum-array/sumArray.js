(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    var sum = values.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;});
    return sum;

    // IMPLEMENT YOUR SOLUTION HERE!
    // MAKE SURE TO USE REDUCE!
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
