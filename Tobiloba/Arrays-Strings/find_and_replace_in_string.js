function findReplaceString(s, indices, sources, targets) {
  const results = [];

  // First we need to convert the indices array to a map
  // of its content and position for constant lookup
  const map = {};
  for (let i = 0; i < indices.length; i++) {
    map[indices[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    if (i in map) {
      // if the current index of s is in the map
      const index = map[i]; // index represents the position of i in the indices array
      const source = sources[index]; // we grab the source based on that position
      if (s.substring(i, i + source.length) === source) {
        // check if the source is a substring starting at s[i]
        results.push(targets[index]); // If it is push the corresponding target to the new array
        // since we've done a replacement, we need to make sure that i is moved to the
        // correct position. i.e, if the source was 5 characters long, it means we replaced
        // 5 characters of s, so we need to continue our checks after the fifth character from
        // our current position. We subtract 1 here because our loop will automatically add
        // 1 for our next iteration.
        i += source.length - 1;
        continue;
      }
    }
    // At this point, there was no source to substitute so we add the current character to the new string
    results.push(s[i]);
  }
  // join all and return.
  return results.join("");
}
