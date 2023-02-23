class Node {
  int hash;
  Object value;
  Node? next;

  Node({required this.hash, required this.value});
  @override
  String toString() {
    return "$value";
  }
}

class HashSet {
  List<Node?> nodes;
  int length;

  HashSet({required this.length})
      : this.nodes = List<Node?>.filled(length, null);

  int hashIndex(Object value) {
    return value.hashCode % nodes.length;
  }

  void put({required Object value}) {
    int index = hashIndex(value);
    if (nodes[index] != null) {
      nodes[index]!.next = Node(hash: index, value: value);
    } else {
      nodes[index] = Node(hash: index, value: value);
    }
  }

  Object? get({required Object value}) {
    int index = hashIndex(value);

    Node? node = nodes[index];

    while (node != null) {
      if (node.value == value) {
        return node.value;
      } else {
        node = node.next;
      }
    }
    return null;
  }

  void remove({required Object value}) {
    int index = hashIndex(value);
    Node? node = nodes[index];
    while (node != null) {
      if (node.value == value) {
        node = null;
      } else {
        node = node.next;
      }
    }
  }

  bool containsValue({required Object value}) {
    int index = hashIndex(value);
    Node? node = nodes[index];
    while (node != null) {
      if (node.value == value) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  }

  @override
  String toString() {
    return "$nodes";
  }
}

void main(List<String> args) {
  HashSet hashSet = HashSet(length: 5);
  print(hashSet);
  hashSet.put(value: "Samuel");
  hashSet.put(value: "Bassey");
  hashSet.put(value: "John");
  hashSet.put(value: "leumaS");

  print(hashSet.containsValue(value: "leumaS"));

  print(hashSet);
}
