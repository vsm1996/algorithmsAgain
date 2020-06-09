class MyArr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1]
    }
    this.data[this.length-1]
    this.length--;
  }
}

const newArr = new MyArr();
console.log(newArr.get(0));

newArr.push("Hi");

console.log(newArr.get(0));

console.log(newArr.push("Friend")); // checking return

console.log(newArr.get(1));

newArr.push("!");
newArr.pop();

console.log(newArr.data);
