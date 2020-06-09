function reverse(str) {
  //edge cases
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input";
  }

  // I plan to make the string an array
  // Iterate through the string backwards
  // and push that into a new array
  // I will then returned a joined array, or string

  let strArr = str.split("");
  let newArr = [];

  for (let i = strArr.length; i >= 0; i--) {
    newArr.push(strArr[i]);
  }

  return newArr.join("");
}

const optimalRev = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input";
  }

  // return str.split('').reverse().join('');
  return [...str].reverse().join("");
};

console.log(reverse("Vanessa"));

console.log(optimalRev('Martin'))