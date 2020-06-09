//sayHello() 
// putting the below declared function would be read and compiled
// above due to hoisting

// function sayHello() {
//   console.log('Hello, world!');
// }
// would  be allocated to memory and would be completely hoisted.

const sayHello = () => console.log('Hello, world!');

// would not be hoisted and needs to be called/invoked below
// counts as a function expression

sayHello();
