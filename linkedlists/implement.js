class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkList {
  constructor(value) {
    (this.head = new Node(value)), (this.tail = this.head);
  }

  append(value) {
    if (!value || value === "undefined") {
      return "Value cannot be undefined";
    }

    if (!this.head) {
      this.head = new Node(value);
      return this;
    }

    let runner = this.head;
    while (runner.next != null) {
      runner = runner.next;
    }
    runner.next = new Node(value);
    this.tail = runner.next;
    return this;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value)
      return this;
    }

    let held = this.head;
    this.head = new Node(value);
    this.head.next = held;
    return this;
  }

  findVal(value) {
    if(!this.head) {
      return null;
    }

    let runner = this.head;

    while(runner !=null ){
      if(runner.value == value) {
        return runner;
      }
      runner = runner.next

    }
    return null;
  }

  remove(value) {
    if(!this.head) {
      return null;
    }

    let runner = this.head;
    while(runner != null) {
      if(runner.next.value === value) {
        runner.next = runner.next.next
        return this
      }
      runner = runner.next
    }

    return "Value does not exist"
  }

}

const ll = new LinkList(10);

ll.append(5);
ll.append(16);
ll.append();
ll.append(20);
console.log(ll);
console.log(ll.remove(5));



