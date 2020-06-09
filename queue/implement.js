class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = new Node(value);
    this.last = this.first;
    this.length = 1;
  }

  printList() {
    let array = [];
    let count = 1;
    let runner = this.first;
    while (count <= this.length) {
      array.push(runner);
      runner = runner.next;
      count++;
    }
    return array;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    if (!this.first) {
      this.first = new Node(value);
      this.last = this.first;
    } else {
      this.last.next = new Node(value);
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null
    }
    
    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

let queue = new Queue(12);

console.log(queue.enqueue(1));

console.log(queue.dequeue());
console.log(queue.dequeue());
