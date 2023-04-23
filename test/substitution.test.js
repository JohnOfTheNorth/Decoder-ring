// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

//All test cases for substitution.js
describe("substitution", () => {
  //Error Handling Tests
  describe("error handling", () => {
    it("should return false if alphabet is not present", () => {
      const actual = substitution("thinkful");
      expect(actual).to.be.false;
    });

    it("should return false if the alphabet length is not 26 characters", () => {
      const actual = substitution("thinkful", "abdefghijklmnopqrstuv");
      expect(actual).to.be.false;
    });

    it("should return false if the input value is not present", () => {
      let message;
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if there are duplicate characters in the given alphabet", () => {
      const actual = substitution("thinkful", "aabbccddeeffgghhiijjkkllmm");
      expect(actual).to.be.false;
    });
  });

  //Substitution encoding tests
  describe("encoding a message", () => {
    it("should encode a message using the substitute alphabet", () => {
      const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
      const expected = "ykrrpik";
      expect(actual).to.equal(expected);
    });

    it("should convert inputted string to lower case", () => {
      const actual = substitution("Thinkful", "gruksoyjpzibwafxevqmclnthd");
      const expected = "mjpaiocb";
      expect(actual).to.equal(expected);
    });

    it("should handle unique characters in the alphabet", () => {
      const actual = substitution("message", "$bea&zrdxtfcygvuh*impjnokl");
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in message", () => {
      const actual = substitution(
        "interstellar was a good movie",
        "qmcgjxoypzibevrukswaflnthd"
      );
      const expected = "pvajswajbbqs nqw q orrg erlpj";
      expect(actual).to.equal(expected);
    });
  });

  //Substitution decoding tests
  describe("decoding a message", () => {
    it("should decode a message using the substitute alphabet", () => {
      const actual = substitution(
        "ykrrpik",
        "plmoknijbuhvygctfxrdzeswaq",
        false
      );
      const expected = "message";
      expect(actual).to.equal(expected);
    });

    it("should convert inputted string to lower case", () => {
      const actual = substitution(
        "MJPAIOCB",
        "gruksoyjpzibwafxevqmclnthd",
        false
      );
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in message", () => {
      const actual = substitution(
        "pvajswajbbqs nqw q orrg erlpj",
        "qmcgjxoypzibevrukswaflnthd",
        false
      );
      const expected = "interstellar was a good movie";
      expect(actual).to.equal(expected);
    });

    it("should work with any kind of unique characters in the substitute alphabet", () => {
      const actual = substitution(
        "y&ii$r&",
        "$wae&zrdxtfcygvuhbijnokmpl",
        false
      );
      const expected = "message";
      expect(actual).to.equal(expected);
    });
  });
});
