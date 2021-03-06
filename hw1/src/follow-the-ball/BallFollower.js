(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {

    BallFollower.swap = function() { 
      var currentposs = 0 + start;
      var len = swaps.length;
      var i = 0;
      var poss = 0;
      while (i < len)
      {
        if(swaps[i].indexOf(currentposs) !== -1)
        {
          poss = 1 - swaps[i].indexOf(currentposs);
          currentposs = swaps[i][poss];
        }
        i = i + 1;
      }
      return currentposs;
    };
    return BallFollower;
     // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
  };

  module.exports = BallFollower; // DON'T ALTER THIS
})();
