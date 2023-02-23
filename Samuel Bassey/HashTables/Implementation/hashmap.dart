// 4 functions of a hashmap includes:
// Put
// Get
// Remove
// ContainsKey
// Size()

class Node {
  int key;
  int hash;
  Object value;
  Node? next;

  Node({required this.key, required this.hash, required this.value});
  @override
  String toString() {
    return "$key : $value";
  }
}

class HashMap {
  List<Node?> nodes;
  int length;
  HashMap({required this.length})
      : this.nodes = List<Node?>.filled(length, null);

  int hashIndex(Object object) => object.hashCode % nodes.length;

  @override
  String toString() {
    return nodes.toString();
  }

  void put({required int key, required Object value}) {
    int index = hashIndex(key);
    if (nodes[index] != null) {
      nodes[index]!.next = Node(key: key, hash: index, value: value);
    } else {
      nodes[index] = Node(key: key, hash: index, value: value);
    }
  }

  Object? get({required int key}) {
    int index = hashIndex(key);
    Node? node = nodes[index];
    while (node != null) {
      if (node.key == key) {
        return node.value;
      } else {
        node = node.next;
      }
    }
    return null;
  }

  void remove({required int key}) {
    int index = hashIndex(key);
    nodes[index] = null;
  }

  bool containsValue({required int key}) {
    int index = hashIndex(key);
    Node? node = nodes[index];
    while (node != null) {
      if (node.key == key) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  }
}
