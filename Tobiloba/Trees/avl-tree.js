// Time Complexity of:

// Search : O(LogN)
// Insert: O(LogN)
// Delete: O(LogN)

class Node {
  constructor(item) {
    this.item = item;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // return height of the node
  height(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  // right rotate
  rightRotate(y) {
    let x = y.left;
    let T2 = x.right;
    x.right = y;
    y.left = T2;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    return x;
  }

  // left rotate
  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;
    y.left = x;
    x.right = T2;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    return y;
  }

  // get balance factor of a node
  getBalanceFactor(node) {
    if (node === null) {
      return 0;
    }
    return this.height(node.left) - this.height(node.right);
  }

  // helper function to insert a node
  insertNodeHelper(node, item) {
    if (node === null) {
      return new Node(item);
    }

    if (item < node.item) {
      node.left = this.insertNodeHelper(node.left, item);
    } else if (item > node.item) {
      node.right = this.insertNodeHelper(node.right, item);
    } else {
      return node;
    }

    // update the balance factor of each node and balance the tree
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    let balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (item < node.left.item) {
        return this.rightRotate(node);
      } else if (item > node.left.item) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      if (item > node.right.item) {
        return this.leftRotate(node);
      } else if (item < node.right.item) {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  // insert a node
  insertNode(item) {
    this.root = this.insertNodeHelper(this.root, item);
  }

  // get node with minimum value
  nodeWithMinimumValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  // delete helper
  deleteNodeHelper(node, item) {
    if (node === null) {
      return node;
    }

    if (item < node.item) {
      node.left = this.deleteNodeHelper(node.left, item);
    } else if (item > node.item) {
      node.right = this.deleteNodeHelper(node.right, item);
    } else {
      if (node.left === null || node.right === null) {
        let temp = null;
        if (temp == node.left) {
          temp = node.right;
        }
      } else {
        let temp = null;
        if (temp == node.left) {
          temp = node.right;
        } else {
          temp = node.left;
        }
        if (temp == null) {
          temp = node;
          node = null;
        } else {
          node = temp;
        }
      }
    }

    if (node === null) {
      return node;
    }

    // update the height of the node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    // get the balance factor of the node
    let balanceFactor = this.getBalanceFactor(node);

    // if the node is unbalanced, balance it
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) >= 0) {
        return this.rightRotate(node);
      } else {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) <= 0) {
        return this.leftRotate(node);
      } else {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  // delete a node with given item
  deleteNode(item) {
    this.root = this.deleteNodeHelper(this.root, item);
  }

  // preorder traversal
  preorder() {
    this.preorderHelper(this.root);
  }

  // preorder traversal helper function
  preorderHelper(node) {
    if (node !== null) {
      console.log(node.item);
      this.preorderHelper(node.left);
      this.preorderHelper(node.right);
    }
  }
}




// Time Complexity of:

// Search : O(LogN)
// Insert: O(LogN)
// Delete: O(LogN)

// Create node

// const Node = function (item) {
//   this.item = item;
//   this.height = 1;
//   this.left = null;
//   this.right = null;
// };

// // AVL Tree
// const AVLTree = function () {
//   let root = null;

//   // return height of the node
//   this.height = (N) => {
//     if (N === null) {
//       return 0;
//     }

//     return N.height;
//   };

//   // right rotate
//   this.rightRotate = (y) => {
//     let x = y.left;
//     let T2 = x.right;
//     x.right = y;
//     y.left = T2;
//     y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
//     x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
//     return x;
//   };

//   // left rotate
//   this.leftRotate = (x) => {
//     let y = x.right;
//     let T2 = y.left;
//     y.left = x;
//     x.right = T2;
//     x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
//     y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
//     return y;
//   };

//   // get balance factor of a node
//   this.getBalanceFactor = (N) => {
//     if (N == null) {
//       return 0;
//     }

//     return this.height(N.left) - this.height(N.right);
//   };

//   // helper function to insert a node

//   const insertNodeHelper = (node, item) => {
//     // find the position and insert the node
//     if (node === null) {
//       return new Node(item);
//     }

//     if (item < node.item) {
//       node.left = insertNodeHelper(node.left, item);
//     } else if (item > node.item) {
//       node.right = insertNodeHelper(node.right, item);
//     } else {
//       return node;
//     }

//     // update the balance factor of each node
//     // and, balance the tree
//     node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

//     let balanceFactor = this.getBalanceFactor(node);

//     if (balanceFactor > 1) {
//       if (item < node.left.item) {
//         return this.rightRotate(node);
//       } else if (item > node.left.item) {
//         node.left = this.leftRotate(node.left);
//         return this.rightRotate(node);
//       }
//     }

//     if (balanceFactor < -1) {
//       if (item > node.right.item) {
//         return this.leftRotate(node);
//       } else if (item < node.right.item) {
//         node.right = this.rightRotate(node.right);
//         return this.leftRotate(node);
//       }
//     }

//     return node;
//   };

//   // insert a node
//   this.insertNode = (item) => {
//     // console.log(root);
//     root = insertNodeHelper(root, item);
//   };

//   // get node with minimum value
//   this.nodeWithMinimumValue = (node) => {
//     let current = node;
//     while (current.left !== null) {
//       current = current.left;
//     }

//     return current;
//   };

//   // delete helper
//   const deleteNodeHelper = (root, item) => {
//     // find the node to be deleted and remove it
//     if (root == null) {
//       return root;
//     }

//     if (item < root.item) {
//       root.left = deleteNodeHelper(root.left, item);
//     } else if (item > root.item) {
//       root.right = deleteNodeHelper(root.right, item);
//     } else {
//       if (root.left === null || root.right === null) {
//         let temp = null;
//         if (temp == root.left) {
//           temp = root.right;
//         } else {
//           temp = root.left;
//         }

//         if (temp == null) {
//           temp = root;
//           root = null;
//         } else {
//           root = temp;
//         }
//       } else {
//         let temp = this.nodeWithMinimumValue(root.right);
//         root.item = temp.item;
//         root.right = deleteNodeHelper(root.right, temp.item);
//       }
//     }

//     if (root == null) {
//       return root;
//     }

//     // update the balance factor of each node and balance the tree
//     root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;

//     let balanceFactor = this.getBalanceFactor(root);
//     if (balanceFactor > 1) {
//       if (this.getBalanceFactor(root.left) >= 0) {
//         return this.rightRotate(root);
//       } else {
//         root.left = this.leftRotate(root.left);
//         return this.rightRotate(root);
//       }
//     }

//     if (balanceFactor < -1) {
//       if (this.getBalanceFactor(root.right) <= 0) {
//         return this.leftRotate(root);
//       } else {
//         root.right = this.rightRotate(root.right);
//         return this.leftRotate(root);
//       }
//     }
//     return root;
//   };

//   // delete a node
//   this.deletNode = (item) => {
//     root = deleteNodeHelper(root, item);
//   };

//   // print the tree in pre-order
//   this.preOrder = () => {
//     this.preOrderHelper(root);
//   };

//   const preOrderHelper = (node) => {
//     if (node) {
//       console.log(node.item);
//       preOrderHelper(node.left);
//       preOrderHelper(node.right);
//     }
//   };
// };
