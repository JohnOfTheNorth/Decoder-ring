// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //refactoring polybiusCode to an object with key-value pairs (letter:value)
  const polybiusCode = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  //reverse of polybiusCode to manage complexity
  const reversePolybius = {};

  for (let letter in polybiusCode) {
    const numPair = polybiusCode[letter];

    if (reversePolybius[numPair]) {
      reversePolybius[numPair] = `(${reversePolybius[numPair]}/${letter})`;
    } else {
      reversePolybius[numPair] = letter;
    }
  }

  function getArray(string) {
    return Array.from(string);
  }

  //Encoder function
  function encoder(input) {
    //Change input into lowercase then converting it into array
    const initialArray = getArray(input.toLowerCase());
    //return a converted array with character translated number values
    return initialArray
      .map((letters) => {
        if (letters === " ") {
          return letters;
        } else {
          return polybiusCode[letters];
        }
      })
      .join("");
  }

  //Decoder function
  function decoder(input) {
    const initialArray = getArray(input);
    const decoderArray = [];
    //turning two values into one return letter
    for (let num = 0; num < initialArray.length; num++) {
      const index = initialArray[num];
      if (index === " ") {
        decoderArray.push(index);
      } else {
        let ones = initialArray[num + 1];
        let tens = index;
        const numKey = tens + ones;
        num = num + 1;
        decoderArray.push(reversePolybius[numKey]);
      }
    }
    return decoderArray.join("");
  }

  //Polybius main function
  function polybius(input, encode = true) {
    // your solution code here

    if (encode) {
      return encoder(input);
    }

    if (encode === false) {
      if (input.replace(" ", "").length % 2 > 0) {
        return false;
      } else {
        return decoder(input);
      }
    }
  }
  //Return polybius function
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
