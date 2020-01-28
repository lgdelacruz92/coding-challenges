const test = "Hello hello world hello";

const adjustIndex = (i, arrayIndex) => {
  return i + arrayIndex * 13;
};

const replaceAt = (str, at, match) => {
  return (
    str.substring(0, at) +
    `<mark>${match}</mark>` +
    str.substring(at + match.length)
  );
};

const markHello = (str, searchTerm) => {
  const MATCHER_LENGTH = 5;
  const regExp = new RegExp(searchTerm, "g");
  const matches = [...str.matchAll(regExp)];

  const openingTagIndices = matches.map(i => i.index);
  const closingTagIndices = matches.map(i => i.index + MATCHER_LENGTH);
  let currentTagIndex = 0;
  let markCount = 0;
  let closeMarkCount = 0;

  let result = [];
  for (let i = 0; i < str.length; i++) {
    const openTagIndex = openingTagIndices[currentTagIndex];
    const closingTagIndex = closingTagIndices[currentTagIndex];

    if (i === openTagIndex) {
      result.push("<mark>");
      markCount += 1;
    } else if (i === closingTagIndex) {
      result.push("</mark>");
      currentTagIndex += 1;
      closeMarkCount += 1;
    }
    result.push(str[i]);
  }

  if (markCount - closeMarkCount === 1) {
    result.push("</mark>");
  }

  return result.join("");
};

const result = markHello(test, "hello");
// console.log(replaceAt(test, 0, "Hello"));
