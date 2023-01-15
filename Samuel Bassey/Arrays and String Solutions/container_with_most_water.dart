import 'dart:math';

class Solution {
  int maxArea(List<int> height, [void Function()? name]) {
    int highest = 0;
    int p1 = 0;
    int p2 = height.length - 1;
    while (p1 != p2) {
      int difference = p2 - p1;
      int smallestNumber = min(height[p2], height[p1]);
      print(smallestNumber);
      int area = difference * smallestNumber;
      if (area > highest) {
        highest = area;
      }
      height[p1] < height[p2] ? p1++ : p2++;
    }

    return highest;
  }
}

void main(List<String> args) {
  String s = "Samuel";
  String john = s[2];
}
