/*global describe, it */
'use strict';

(function () {

  describe('Morse', function () {

    it('should exist', function() {
      expect(morse).to.exist;
    });

    describe('Convert a String', function() {

      it('should have an "encode" method', function() {
        expect(morse.encode).to.be.a('function');
      });

      describe('encode', function () {
        before(function() {
          this.string = 'SOS';
          this.result = morse.encode(this.string);
        });

        it('should return a String', function() {
          expect(this.result).to.be.a('string');
        });

        it('should encode a Roman alphabet String into Morse Code', function() {
          expect(this.result).to.equal('... --- ...');
        });
      });

      it('should have an "decode" method', function() {
        expect(morse.encode).to.be.a('function');
      });

      describe('decode', function () {
        before(function() {
          this.string = '... --- ...';
          this.result = morse.decode(this.string);
        });

        it('should return a String', function() {
          expect(this.result).to.be.a('string');
        });

        it('should decode a Morse Code String into the Roman alphabet', function() {
          expect(this.result).to.equal('sos');
        });
      });

    });

  });

})();
