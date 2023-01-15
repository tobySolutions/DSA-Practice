import 'dart:collection';
import 'dart:math';

void main(List<String> args) {
  // String str = "fvokzonyhukpwbnkomdianhirsvdulhsfseaqzktupyeverfsd";
  // List<int> indices = [
  //   26,
  //   30,
  //   38,
  //   2,
  //   41,
  //   10,
  //   8,
  //   44,
  //   19,
  //   4,
  //   13,
  //   28,
  //   21,
  //   35,
  //   23,
  //   16
  // ];
  // List<String> sources = [
  //   "vd",
  //   "hsfs",
  //   "ktu",
  //   "ok",
  //   "pye",
  //   "kp",
  //   "hu",
  //   "verfs",
  //   "ia",
  //   "zon",
  //   "bnk",
  //   "ul",
  //   "nh",
  //   "aqz",
  //   "irs",
  //   "om"
  // ];
  // List<String> target = [
  //   "h",
  //   "gdlf",
  //   "nl",
  //   "sr",
  //   "xhn",
  //   "ax",
  //   "arf",
  //   "ifuax",
  //   "a",
  //   "mk",
  //   "vwqe",
  //   "fdl",
  //   "n",
  //   "miyr",
  //   "ibh",
  //   "den"
  // ];
  String s = "abab";
  List<int> indices = [0, 2];
  List<String> sources = ["ab", "ab"];
  List<String> target = ["balance", "sheet"];
  String product = findReplaceString(s, indices, sources, target);
  print(product);
}

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
