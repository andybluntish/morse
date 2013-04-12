/**
 * Morse.js
 * Convert text to and from morse code
 */

// Plugin template - http://jqueryboilerplate.com

// Morsify
;(function ( $, window, document, undefined ) {

  var pluginName = "morsify",
      defaults = {
        lookup: {
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
        }
      };

  function Plugin( element, options ) {
    this.element = element;
    this.$element = $(this.element);
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var original = this.$element.html(),
          encoded = [],
          chars = original.toLowerCase().split(''),
          len = chars.length;

      for ( j = 0; j < len; j++ ) {
        encoded.push(this.options.lookup[chars[j]]);
      }

      this.$element.html(encoded.join(' ')).attr( 'data-original-value', original );
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );



// Demorsify
;(function ( $, window, document, undefined ) {

  var pluginName = "demorsify",
      defaults = {
        lookup: {
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
        }
      };

  function Plugin( element, options ) {
    this.element = element;
    this.$element = $(this.element);
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var original = this.$element.html(),
          decoded = [],
          chars = original.toLowerCase().split(' '),
          len = chars.length;

      for ( j = 0; j < len; j++ ) {
        decoded.push(this.options.lookup[chars[j]]);
      }

      this.$element.html(decoded.join('')).attr( 'data-original-value', original );
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );
