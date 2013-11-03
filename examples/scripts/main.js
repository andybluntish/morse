require(['../../build/morse.min'], function(morse) {
  'use strict';

  morse.encode('.to-morse');
  morse.decode('.from-morse');
});
