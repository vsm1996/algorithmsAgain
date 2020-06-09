// holds more memory

class Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value, null);
    this.tail = new Node(value, null);
    this.length = 1;
  }

  printList() {
    if (!this.head) {
      return null;
    }
    let array = [];
    let runner = this.head;
    while (runner !== null) {
      array.push(runner.value);
      runner = runner.next;
    }
    return array;
  }

  traverseToIndex(index) {
    if (typeof index !== "number") {
      return "Invalid index";
    }

    let count = 0;
    let runner = this.head;
    while (count !== index) {
      runner = runner.next;
      count++;
    }
    return runner;
  }

  find(val) {
    if (!this.head) {
      return null;
    }

    let runner = this.head;
    while (runner !== null) {
      if (runner.value === val) {
        return runner;
      }

      runner = runner.next;
    }

    return null;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value, null);
      return this.printList();
    }

    let held = this.head;
    this.head = new Node(value, null);
    this.head.next = held;

    this.length++;
    return this.printList();
  }

  append(value) {
    if (!this.head) {
      this.head = newNode(value, null);
      return this.printList();
    }

    let runner = this.head;
    while (runner.next !== null) {
      runner = runner.next;
    }

    runner.next = new Node(value, runner);
    this.tail = runner.next;

    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (!this.head) {
      this.head = nextNode(value, null);
      return this.printList;
    }

    let leader = this.traverseToIndex(index - 1);
    let held = leader.next;
    leader.next = new Node(value, leader);
    leader.next.prev = leader;
    leader.next.next = held;

    if (leader.next.next === null) {
      this.tail = leader.next;
    }

    this.length++;
    return this.printList();
  }

  removeByVal(value) {
    if (!this.head) {
      return null;
    }

    if (value === this.head.value) {
      this.head = this.head.next;
      return this.printList();
    }

    let runner = this.head;

    while (runner !== null) {
      if (runner.next.value === value) {
        runner.next = runner.next.next;

        this.length--;
        if (runner.next === null) {
          this.tail = runner;
        }
        return this.printList();
      }
      runner = runner.next;
    }

    return null;
  }

  removeByIndex(index) {
    if (!this.head) {
      return null;
    }

    let leader = this.traverseToIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    if (leader.next === null) {
      this.tail = leader;
    }
    this.length--;
    return this.printList();
  }
}

const myDLL = new DoublyLinkedList(222);

myDLL.append(33);
myDLL.append(444);
myDLL.append(55555);
myDLL.prepend(111);
myDLL.insert(4, 55);
myDLL.insert(1, 22);
myDLL.insert(7, 9999);
myDLL.removeByVal(9999);

myDLL.removeByIndex(6);

console.log(myDLL.printList())

console.log(myDLL.reverse())
