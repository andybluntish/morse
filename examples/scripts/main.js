require(['../../build/morse.min'], function(morse) {
  'use strict';

  // Strings
  var romanStr = 'I have a ham radio',
      morseStr = '..  .... .- ...- .  .-  .... .- --  .-. .- -.. .. ---';
  console.log(morse.encode(romanStr));
  console.log(morse.decode(morseStr));

  // Elements
  morse.encodeHTML('.to-morse');
  morse.decodeHTML('.from-morse');
});
