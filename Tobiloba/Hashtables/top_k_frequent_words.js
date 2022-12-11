/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
  O(nlog(k)) time and O(N) space
 */
var topKFrequent = function (words, k) {
  let map = {};

  //    iterate over the words array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    map[word] = (map[word] ?? 0) + 1;
  }

  // Access the values in the map and try to make the key and value be in a 2D array.
  const newArray = Object.entries(map);

  // sort the values by frequency and handle the lexicographic edge case
  newArray.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  const newWords = [];

  for (let i = 0; i < k; i++) {
    newWords.push(newArray[i][0]);
  }

  return newWords;
};
