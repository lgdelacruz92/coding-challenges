const words = ["gin", "zen", "gig", "msg"];
const uniqueMorseRepresentations = words => {
  const lowerCaseMorse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const map = {};
  const transformations = new Set();

  for (let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = lowerCaseMorse[i];
  }
  for (let i = 0; i < words.length; i++) {
    let currentWord = "";
    for (let j = 0; j < words[i].length; j++) {
      currentWord += map[words[i][j]];
    }
    transformations.add(currentWord);
  }
  const trArray = Array.from(transformations);
  console.log(trArray);
  console.log(trArray.length);
  return trArray.length;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
uniqueMorseRepresentations([]);
uniqueMorseRepresentations(["abcdefghi"]);
