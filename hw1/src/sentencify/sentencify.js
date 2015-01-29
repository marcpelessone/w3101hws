(function () {
  'use strict';

  var sentencify = function (words) {
    var sent = '';
    var i = 1;
    var len = words.length;
    if (len > 0)
    {
      sent = words[0];
    }
    for(; i < len; i++)
    {
      sent.concat( ' ');
      sent.concat( words[i]);
    }
    return sent;
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
  };

  module.exports = sentencify;  // DO NOT CHANGE THIS
})();
