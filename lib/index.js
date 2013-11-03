/**
 * Morse.js
 * Convert text to and from morse code
 */

var Morse = {
  encode: function(selector) {
    var lookup = {
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
        },
        elements = document.querySelectorAll(selector),
        length = elements.length, i, j;

    for ( i = 0; i < length; ++i ) {
      var el = elements[i],
          original = el.innerHTML,
          encoded = [],
          chars = original.toLowerCase().split(''),
          len = chars.length;

      for ( j = 0; j < len; j++ ) {
        encoded.push(lookup[chars[j]]);
      }

      el.innerHTML = encoded.join(' ');
      el.setAttribute( 'data-original-value', original );
    }
  },

  decode: function(selector) {
    var lookup = {
          '.-': 'a',
          '-...': 'b',
          '-.-.': 'c',
          '-..': 'd',
          '.': 'e',
          '..-.': 'f',
          '--.': 'g',
          '....': 'h',
          '..': 'i',
          '.---': 'j',
          '-.-': 'k',
          '.-..': 'l',
          '--': 'm',
          '-.': 'n',
          '---': 'o',
          '.--.': 'p',
          '--.-': 'q',
          '.-.': 'r',
          '...': 's',
          '-': 't',
          '..-': 'u',
          '...-': 'v',
          '.--': 'w',
          '-..-': 'x',
          '-.--': 'y',
          '--..': 'z',
          '.----': '1',
          '..---': '2',
          '...--': '3',
          '....-': '4',
          '.....': '5',
          '-....': '6',
          '--...': '7',
          '---..': '8',
          '----.': '9',
          '-----': '0',
          '': ' '
        },
        elements = document.querySelectorAll(selector),
        length = elements.length, i, j;

    for ( i = 0; i < length; ++i ) {
      var el = elements[i],
          original = el.innerHTML,
          decoded = [],
          chars = original.toLowerCase().split(' '),
          len = chars.length;

      for ( j = 0; j < len; j++ ) {
        decoded.push(lookup[chars[j]]);
      }

      el.innerHTML = decoded.join('');
      el.setAttribute( 'data-original-value', original );
    }
  }
};
