// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

//All test cases for polybius.js
describe("polybius", () => {
  //Polybius encoding tests
  describe("encoding messages", () => {
    //used to check if it properly handles capital letters
    it("should convert string to lower case", () => {
      const expected = "513331434151";
      const actual = polybius("Encode");
      expect(actual).to.equal(expected);
    });
    it("should return a string converted into polybius numbers", () => {
      const expected = "3251131343";
      const actual = polybius("hello!");
      expect(actual).to.equal(expected);
    });
    it("should encode both 'i' and 'j' into a 42 polybius number", () => {
      const actual = polybius("janitor");
      const expected = "42113342444324";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("Hello world");
      expect(actual).to.equal(expected);
    });
  });
  //Polybius decoding tests
  describe("decoding messages", () => {
    it("should return false if the number of characters is not even", () => {
      const actual = polybius("33524441522341232", false);
      expect(actual).to.be.false;
    });

    it("should return a string converted into polybius square specified letter", () => {
      const expected = "number";
      const actual = polybius("335423215124", false);
      expect(actual).to.equal(expected);
    });
    it("should translate 42 to 'i' and 'j'", () => {
      //expected output for jon should be (i/j)on.
      const expected = "(i/j)on";
      const actual = polybius("424333", false);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal(expected);
    });
  });
});
