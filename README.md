# Morse.js

Convert text to and from morse code.

## Usage

Call `Morse.encode()` and pass in a query selector (calls `document.querySelectorAll()` internally) to convert from text to Morse code.

    Morse.encode('.to-morse');

Call `Morse.decode()` and pass in a query selector (calls `document.querySelectorAll()` internally) to convert from Morse code to text.

    Morse.decode('.from-morse');
