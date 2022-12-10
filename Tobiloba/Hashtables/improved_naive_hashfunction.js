// A new an improved hash function
  function hash (key) {
    let hashValue = 0;
    // Handle different value types
    const stringTypeKey = `${key}${typeof key}`

    for (let idx = 0; idx < stringTypeKey.length; idx++) {
        const charCode = stringTypeKey.charCodeAt(idx);
        // handle collision here:
        hashValue += charCode << (idx * 8);
    }

     return hashValue;
  }


console.log(hash(1)); // 1843909523
console.log(hash("1")); // 1927012762

console.log(hash("1,2,3")); // 2668498381
console.log(hash([1, 2, 3])); // 2533949129

console.log(hash("undefined")); // 5329828264
console.log(hash(undefined)); 