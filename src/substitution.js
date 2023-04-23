// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    let message = "";
    const sortedAlphabet = "abcdefghijklmnopqrstuvwxyz";
    //check if alphabet is missing then return false
    if (!input) return false;
    //checks alphabet length and returns false if under 26 characters
    if (!alphabet || alphabet.length !== 26) return false;
    //sets input to lowercase
    input = input.toLowerCase();
    //check for duplicate letters
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }

    //decode conditional
    if (!encode) {
      for (let letter of input) {
        if (alphabet.includes(letter)) {
          letterIndex = alphabet.indexOf(letter);
          message += sortedAlphabet[letterIndex];
        } else {
          if (letter === " ") {
            message += letter;
          }
        }
      }
      return message;
    }

    //encode conditional
    if (encode) {
      for (let letter of input) {
        if (sortedAlphabet.includes(letter)) {
          letterIndex = sortedAlphabet.indexOf(letter);
          message += alphabet[letterIndex];
        } else {
          if (letter === " ") {
            message += letter;
          }
        }
      }
      return message;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
