class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }

    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    }

    let heldNode = this.head;
    this.head = new Node(value);
    this.head.next = heldNode;
    this.length++;
    return this;
  }

  printList() {
    let array = [];
    let runner = this.head;
    while (runner !== null) {
      array.push(runner.value);
      runner = runner.next;
    }
    return array;
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

  traverseToIndex(index) {
    if (typeof index !== "number") {
      return "Invalid index";
    }

    let counter = 0;
    let runner = this.head;
    while (counter !== index) {
      runner = runner.next;
      counter++;
    }
    return runner;
  }

  insert(index, val) {
    if (index >= this.length) {
      this.append(val);
      return this.printList();
    }

    if (index === 0) {
      this.prepend(val);
      return this.printList();
    }

    let leader = this.traverseToIndex(index - 1);
    let heldVal = leader.next;
    leader.next = new Node(val);
    leader.next.next = heldVal;
    this.length++;
    return this.printList();
  }

  remove(index) {
    //check params
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const heldVal = leader.next;
    leader.next = heldVal.next;
    this.length--;
    if (leader.next === null) {
      this.tail = leader;
    }
    return this.printList();
  }

  reverse() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return this.head;
    }

    let head = this.head;
    this.tail = this.head;
    let second = head.next;

    while (second) {
      const temp = second.next;
      second.next = head;
      head = second;
      second = temp;
    }

    this.head.next = null;
    this.head = head;
    return this.printList();
  }
}

const ll = new LinkedList(12); // 12

ll.append(5); // 12,5
ll.prepend(2); // 2,12,5

ll.insert(4, 22); // 2,12,5,22

console.log(ll.remove(3)); // 2,5,22
console.log(ll.reverse());
console.log(ll);
