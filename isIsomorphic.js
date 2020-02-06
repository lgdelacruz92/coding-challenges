var isIsomorphic = function(s, t) {
  if (s === t) {
    return true;
  }

  const mappingFromStoT = {};
  const mappingFromTtoS = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (
      mappingFromStoT[sChar] !== undefined &&
      mappingFromTtoS[tChar] !== undefined
    ) {
      const recordedTMappingOfS = mappingFromStoT[sChar];
      const recordedSMappingOfT = mappingFromTtoS[tChar];
      if (recordedTMappingOfS !== tChar && recordedSMappingOfT !== sChar) {
        return false;
      }
    } else if (
      mappingFromStoT[sChar] !== undefined &&
      mappingFromTtoS[tChar] === undefined
    ) {
      return false;
    } else if (
      mappingFromTtoS[tChar] !== undefined &&
      mappingFromStoT[sChar] === undefined
    ) {
      return false;
    }

    mappingFromStoT[sChar] = tChar;
    mappingFromTtoS[tChar] = sChar;
  }

  return true;
};

console.log(isIsomorphic("", ""));
console.log(isIsomorphic("e", "d"));
console.log(isIsomorphic("ee", "df"));
console.log(isIsomorphic("ee", "  "));
console.log(isIsomorphic("123", "abc"));
console.log(isIsomorphic("123", " bc"));
console.log(isIsomorphic("ab", "aa"));
