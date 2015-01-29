(function () {
  'use strict';

  var sentencify = function (words) {
    var sent = '';
    
    var len = words.length;
    if (len > 0)
    {
      sent = words[0];
    }
    for(var i = 1; i < len; i++)
    {
      sent = sent.concat( ' ');
      sent = sent.concat( words[i]);
    }
    return sent;
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
  };

  module.exports = sentencify;  // DO NOT CHANGE THIS
})();
