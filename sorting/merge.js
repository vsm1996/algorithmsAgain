const numbers = [0,9,7,4,1,8];

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    console.log('l', left)
    console.log('r',right)
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
 console.log(answer)