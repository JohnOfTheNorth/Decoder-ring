// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //if shift isn't present, shift = 0, or > 25 or less than 25, return false
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    if (!encode) shift *= -1; //reverses the shift

    //sets inputs to lowerCase
    let lowerCase = input.toLowerCase();

    let final = ""; //initialize string for return

    //loop through input
    for (let i = 0; i < lowerCase.length; i++) {
      let letter = lowerCase[i];

      if (letter.match(/[a-z]/)) {
        ////checks if input matches any character in the alphabet array
        //shift the charcode of the character
        let code = lowerCase.charCodeAt(i) + shift;

        if (code < 97) {
          code = code + 26;
        }

        if (code > 122) {
          code = code - 26;
        }

        let pullString = String.fromCharCode(code);
        final += pullString;
      } else {
        final += letter;
      }
    }
    return final; //return string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
