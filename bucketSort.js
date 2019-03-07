let arr = [2,1,4,7,9]
let lowest = 1;
let highest = 9;

function bucketSort(arr, lowest, highest, newArr=[], i=0) {
  if (i > arr.length - 1) {
    return newArr
  }
  
  let merger = merge(newArr, [arr[i]])
  return (bucketSort(arr, lowest, highest, merger, ++i))
  
}

function merge(left, right, array=[]) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    console.log('Im running')
    // ticks++;
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    // ticks++;
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    // ticks++;
    array[outputIndex++] = right[i];
  }

  return array;
}

console.log(bucketSort(arr, lowest, highest))