class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let runner = this.root;
    while (runner) {
      if (runner.val < val) {
        if (runner.right) {
          runner = runner.right;
        } else {
          runner.right = new Node(val);
          return this;
        }
      } else {
        if (runner.left) {
          runner = runner.left;
        } else {
          runner.left = new Node(val);
          return this;
        }
      }
    }

    return null + " No duplicates allowed";
  }

  find(val) {
    if (!this.root) {
      return null;
    }
    let runner = this.root;
    while (runner) {
      if (runner.val === val) {
        return runner;
      }

      if (runner.val < val) {
        runner = runner.right;
      } else {
        runner = runner.left;
      }
    }
    return undefined + " Value not found";
  }

  delete(val) {
    if (!this.root) {
      return null;
    }

    let runner = this.root;
    let parent = null;

    while (runner !== null) {
      if (runner.val !== val) {
        if (runner.val < val) {
          parent = runner;
          runner = runner.right;
        }
        if (runner.val > val) {
          parent = runner;
          runner = runner.left;
        }
      } else {
        // no right child
        if (!runner.right) {
          if (!parent) {
            this.root = runner.left;
          } else {
            // if parent > runner
            // make runner.left a child
            // of parent.left
            if (runner.val < parent) {
              parent.left = runner.left;
            }
            // if parent < runner
            // make runner.left a child
            // of parent.right
            else if (runner.val > parent) {
              parent.right = runner.left;
            }
          }
        } // right child without left child
        else if (!runner.right.left) {
          if (!parent) {
            this.root = runner.left;
          } else {
            runner.right.left = runner.left;

            // if parent > runner
            // make runner.right a child
            // of parent.right

            if (runner.val < parent) {
              parent.left = runner.right;
            }
            // if parent < runner
            // make runner.right a child
            // of parent.right
            else if (runner.val > parent) {
              parent.right = runner.right;
            }
          }
        }
        // right child with left child
        else {
          //find the Right child's left most child
          let leftmost = runner.right.left;
          let leftmostParent = runner.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = runner.left;
          leftmost.right = runner.right;

          if (parent === null) {
            this.root = leftmost;
          } else {
            if (runner.val < parent.val) {
              parent.left = leftmost;
            } else if (runner.val > parent.val) {
              parent.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let runner = this.root;
    let list = [];
    let queue = [];

    queue.push(runner);

    while (queue.length > 0) {
      runner = queue.shift();
      list.push(runner.val);
      if (runner.left) {
        queue.push(runner.left);
      }
      if (runner.right) {
        queue.push(runner.right);
      }
    }
    return list;
  }
}

const bst = new BST();

bst.insert(5).insert(20).insert(3).insert(50).insert(10).insert(6).insert(4);

 
console.log(bst)

console.log(bst.breadthFirstSearch());
