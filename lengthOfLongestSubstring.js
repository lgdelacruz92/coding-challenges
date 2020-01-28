let test1 = "abcabcbb";
let test2 = "bbbbbb";
let test3 = "pwwkew";
let test4 = "ab";
let test5 = "aab";
let test6 = "dvdf";
let test7 = "a";
let test8 = "";
var lengthOfLongestSubstring = function(s) {
  let history = {};
  let result = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const currentChar = s[j];
      if (history[currentChar] === undefined) {
        history[currentChar] = true;
        result.push(currentChar);
      } else {
        const substring = result.join("");
        // console.log(substring);
        if (substring.length > max) {
          max = substring.length;
        }
        // clear history
        history = {};
        result = [];
        break;
      }
    }
  }
  // console.log(result.join(""), "last");
  if (result.length > max) {
    console.log(s, result.length);
    return result.length;
  }
  console.log(s, max);

  return max;
};

lengthOfLongestSubstring(test1);
lengthOfLongestSubstring(test2);
lengthOfLongestSubstring(test3);
lengthOfLongestSubstring(test4);
lengthOfLongestSubstring(test5);
lengthOfLongestSubstring(test6);
lengthOfLongestSubstring(test7);
lengthOfLongestSubstring(test8);

// abcb save abc
// bcab save bca
// cabc save cab
// abcb save abc
// bcb save bc
// cbb save cb
// bb save b
// save b

// bb save b
// bb save b
// bb save b

// pww save pw
// ww save w
// wkew save wke
// keww save kew
// eww save ew
// ww save w
// save w

// save ab

// aa save a
// ab save ab

// dvd save dv
// vdf save vdf
