//  O(1) space and O(N) time
function maxArea(height) {
  // Use two pointers to traverse the array
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  // use a variable to keep track of the maxHeight
  let maxHeight = 0;

  while (pointer1 != pointer2) {
    //  difference is the index at pointer2 (upper bound) minus index at pointer1
    // (lower bound)
    let difference = pointer2 - pointer1;
    // find smallest value
    let smallestValue = Math.min(height[pointer2], height[pointer1]);
    // area will be calculated
    let area = difference * smallestValue;

    //  maxHeight needs to be tracked
    if (area > maxHeight) maxHeight = area;

    if (height[pointer1] < height[pointer2]) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return maxHeight;
}
