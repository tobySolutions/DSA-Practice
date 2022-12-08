function compress(chars) {
  const frequencies = new Map();
  const newArray = [];

  let s = "";

  let slowPointer = 0;
  let fastPointer = 0;
  let counter = 0;

  while (slowPointer < fastPointer) {
    if (chars[slowPointer] === chars[fastPointer]) {
      fastPointer++;
      counter++;
      console.log(counter);
    } else if (fastPointer === chars.length - 1) {
      frequencies.set(chars[slowPointer], counter);
    } else {
      slowPointer = fastPointer;
      frequencies.set(chars[slowPointer], counter);
      fastPointer++;
      counter = 0;
    }
  }

  chars = newArray;

  console.log(chars);

  frequencies.forEach((value, key) => {
    chars.push(key);
    chars.push(value);
    console.log(chars);
    console.log(frequencies);
  });

  return chars.length;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
