const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];

// recommended
function matchingStrings(strings, queries) {
  let dic = {};

  for (let i = 0; i < strings.length; i++) {
    const string = strings[i];
    if (dic[string]) {
      dic[string] += 1;
    } else {
      dic[string] = 1;
    }
  }

  let result = queries.map(i => 0);
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    if (dic[query]) {
      result[i] = dic[query];
    }
  }
  console.log(result);
  return result;
}

// // My solution
// function matchingStrings(strings, queries) {
//   let queriesLibrary = {};
//   for (let i = 0; i < queries.length; i++) {
//     queriesLibrary[queries[i]] = i;
//   }

//   console.log(queriesLibrary);

//   let result = queries.map(i => 0);
//   console.log(result);
//   for (let i = 0; i < strings.length; i++) {
//     let string = strings[i];
//     console.log(string);
//     if (queriesLibrary[string] !== undefined) {
//       // if string exists
//       const index = queriesLibrary[string]; // get index
//       result[index] += 1;
//     }
//   }
//   console.log(result);
//   return result;
// }

// function matchingStrings(strings, queries) {
//   let result = queries.map(i => 0);
//   for (let i = 0; i < queries.length; i++) {
//     for (let j = 0; j < strings.length; j++) {
//       if (strings[j] === queries[i]) {
//         result[i] += 1;
//       }
//     }
//   }
//   console.log(result);
//   return result;
// }

matchingStrings(strings, queries);
