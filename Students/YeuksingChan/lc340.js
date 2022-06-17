// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = (str, k) => {
  let windStart = 0;
  const stringMap = new Map();
  let max = 0;
  let count = 0;
  for (let windEnd = 0; windEnd < str.length; windEnd++) {
    let char = str[windEnd];
    if (!stringMap.get(char)) stringMap.set(char, 1);
    else stringMap.set(char, stringMap.get(char) + 1);
    count++;
    while (stringMap.size > k) {
      let c = str[windStart];
      if (stringMap.get(c) > 1) stringMap.set(c, stringMap.get(c) - 1);
      else stringMap.delete(c);
      windStart++;
      count--;
    }
    // aaaabac, "aaaab" needs to be removed
    // aaaabbbbaaac, "aaaabbbb"
    max = Math.max(max, count);
  }
  return max;
};

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "aaaabbbbaacc",
    2
  )}`
);

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
);
