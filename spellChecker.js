const isVowel = c => {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  return vowels[c.toLowerCase()] === true;
}

const isMatchUptoCapilatization = (wordlist, q) => {
  let found = false;

  for (let i = 0; i < wordlist.length; i++) {
    const w = wordlist[i];
    if (w.length !== q.length) {
      continue;
    } else {

      for (let j = 0; j < q.length; j++) {
        const w_i = w[j];
        const q_i = q[j];
        if (isVowel(w_i) && isVowel())
      }
    }
  }

  return { word: "", index: -1 };
};

var spellchecker = function(wordlist, queries) {
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const q = queries[i];
    if (wordlist.indexOf(q) >= 0) {
      result.push(q);
      continue;
    } else {
      const upToCap = isMatchUptoCapilatization(wordlist, q);
    }
  }

  return result;
};
