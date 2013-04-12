# Morse.js

Convert text to and from morse code.

## Usage

Morse comes in two flavours, jQuery plugin or vanilla JavaScript.

### jQuery

Call `morsify()` on a jQuery object to convert from text to Morse code.

    $('.to-morse').morsify();

Call `demorsify()` on a jQuery object to convert from Morse code to text.

    $('.from-morse').demorsify();

### JavaScript

Call `Morse.encode()` and pass in a query selector (calls `document.querySelectorAll()` internally) to convert from text to Morse code.

    Morse.encode('.to-morse');

Call `Morse.decode()` and pass in a query selector (calls `document.querySelectorAll()` internally) to convert from Morse code to text.

    Morse.decode('.from-morse');
