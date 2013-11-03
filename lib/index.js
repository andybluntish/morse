/**
 * Morse.js
 * Convert text to and from morse code
 */

var Morse = (function() {
  'use strict';

  var _map = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    ' ': ''
  };

  // Iterate over elements
  var _iterate = function(selector, separator, joiner, lookup) {
    var elements = document.querySelectorAll(selector),
        elen = elements.length;

    for (var i = 0; i < elen; ++i) {
      var el = elements[i],
          original = el.innerHTML,
          list = [],
          chars = original.toLowerCase().split(separator),
          slen = chars.length;

      for (var j = 0; j < slen; ++j) {
        list.push( lookup.call(this, _map, chars[j]) );
      }

      el.innerHTML = list.join(joiner);
      el.setAttribute('data-original-value', original);
    }
  };

  // Encode elements
  var encode = function(selector) {
    _iterate(selector, '', ' ', function(map, character) {
      return map[character];
    });
  };

  // Decode elements
  var decode = function(selector) {
    _iterate(selector, ' ', '', function(map, character) {
      return Object.keys(map).filter(function(key) {
        return map[key] === character;
      })[0];
    });
  };

  return {
    encode: encode,
    decode: decode
  };
}());
