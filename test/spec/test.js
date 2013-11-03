/*global describe, it */
'use strict';
(function () {

  describe('Morse', function () {

    beforeEach(function() {
      // setup
    });

    it('should exist', function() {
      expect(morse).to.exist;
    });

    describe('encode', function () {
      it('should have an "encode" method', function() {
        expect(morse.encode).to.be.a('function');
      });

      it('should encode an HTML element into Morse code');
    });

    describe('decode', function () {
      it('should have an "decode" method', function() {
        expect(morse.decode).to.be.a('function');
      });

      it('should decode an HTML element from Morse code');
    });

  });

})();
