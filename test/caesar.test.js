// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  //All Caesar Shift Error handling tests
  describe("error handling for shift", () => {
    //Tests to determine if the shift value is valid
    it("should return false if shift is not present", () => {
      const expected = false;
      const actual = caesar("encode");
      expect(actual).to.equal(expected);
    });

    it("should return false if shift is equal to 0", () => {
      const expected = false;
      const actual = caesar("encode", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift is less than -25", () => {
      const expected = false;
      const actual = caesar("encode", -26);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift is greater then 25", () => {
      const expected = false;
      const actual = caesar("encode", 26);
      expect(actual).to.equal(expected);
    });
  });

  //Caesar Shift encoding tests
  describe("encoding messages", () => {
    it("should convert string to lower case", () => {
      const expected = "rfwrehu";
      const actual = caesar("October", 3);
      expect(actual).to.equal(expected);
    });
    it("should encode message by shifting the letters", () => {
      const actual = caesar("encode", 3);
      const expected = "hqfrgh";
      expect(actual).to.equal(expected);
    });
    it("should handle negative shift by shifting left through the alphabet", () => {
      const expected = "zixjyz";
      const actual = caesar("encode", -5);
      expect(actual).to.equal(expected);
    });
    it("should be able to handle letters at the end of the alphabet", () => {
      const expected = "fdhvdu vkliw";
      const actual = caesar("caesar shift", 3);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other symbols", () => {
      const expected = "dtz hfs'y ijhtij ymnx rjxxflj!";
      const actual = caesar("You can't decode this message!", 5);
      expect(actual).to.equal(expected);
    });
  });

  //Caesar Shift decoding tests
  describe("decoding messages", () => {
    it("should convert string to lower case", () => {
      const expected = "number";
      const actual = caesar("qxpehu", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should decode by shifting the letters in the opposite direction", () => {
      const expected = "encode";
      const actual = caesar("hqfrgh", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should react to a negative shift by shifting left through the alphabet", () => {
      const expected = "number";
      const actual = caesar("jqixan", -4, false);
      expect(actual).to.equal(expected);
    });
    it("should be able to handle letters at the end of the alphabet", () => {
      const expected = "zealous";
      const actual = caesar("chdorxv", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other symbols in the message", () => {
      const expected = "you can't decode this message!";
      const actual = caesar("eua igt'z jkiujk znoy skyygmk!", 6, false);
      expect(actual).to.equal(expected);
    });
  });
});
