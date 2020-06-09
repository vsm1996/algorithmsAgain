function kLF2(arr, x) {
  let k = arr.length - x;
  for (let i = 0; i < arr.length / 2; i++) {
    arr[i] = arr[arr.length - x];
    arr[arr.length - x] = arr[arr.length - x + 1];
    x--;
  }

  while (k > 0) {
    arr.pop();
    k--;
  }

  return arr;
}

let array = [2, 4, 6, 8, 10];
console.log(kLF2(array, 4));
