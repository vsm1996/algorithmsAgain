const numbers = [45, 2, 5, 6, 11, 54, 77, 9];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
