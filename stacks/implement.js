class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = new Node(value);
    this.bottom = this.top;
    this.length = 1;
  }

  peek() {
    if (!this.top) {
      return null;
    }
    return this.top;
  }

  push(value) {
    if (!this.top) {
      this.top = new Node(value);
      return this;
    }

    let hold = this.top;
    this.top = new Node(value)
    this.top.next = hold
    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return this;
    }

    if(this.length === 0) {
        this.bottom = null;
    }

    let held = this.top;
    this.top = held.next;

    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const stack = new Stack(2);
stack.push(5);

stack.isEmpty();
console.log(stack);
