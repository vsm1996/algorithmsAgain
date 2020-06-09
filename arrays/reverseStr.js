function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input";
  }
  const backwards = [];
  const totalItems = str.length;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function optimalReverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input";
  }

  return str.split('').reverse().join('');
  // return [...str].reverse().join('')
}

// const optRev = str => str.split('').reverse().join('');
// const optRev2 = str => [...str].reverse().join('');

console.log(optRev ("only"));
console.log(optRev2 ("only"));

console.log(reverse("only"));
console.log(optimalReverse("only"));
