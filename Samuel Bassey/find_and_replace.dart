import 'dart:collection';
import 'dart:math';

String findReplaceString(
  String s,
  List<int> indices,
  List<String> sources,
  List<String> targets,
) {
  String newString = s;
  for (int i = 0; i < indices.length; i++) {
    String subString = "";
    int index = indices[i];
    int count = 0;
    int l = sources[i].length;
    while (count < l) {
      subString += s[index];
      print(index);
      index++;
      count++;
    }
    print(subString);
    if (subString == sources[i]) {
      newString = newString.replaceAll(sources[i], targets[i]);
      print(newString);
    }
  }
  return newString;
}
