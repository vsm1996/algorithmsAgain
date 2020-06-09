let myRe = /abc/;
let str = 'Hi abc'

console.log(myRe.exec(str))
// [ 'abc', index: 3, input: 'Hi abc', groups: undefined ]

console.log(myRe.test(str))
// true / returns bool
// faster than exec and match

console.log(str.match(myRe))
// [ 'abc', index: 3, input: 'Hi abc', groups: undefined ]

// console.log(str.matchAll(myRe))

console.log('returns index of match: ', str.search(myRe))
// returns index of match
// 3

console.log(str.replace(myRe, 'lotus'))
// Hi lotus

console.log(str.split(myRe))
// [ 'Hi ', '' ]

