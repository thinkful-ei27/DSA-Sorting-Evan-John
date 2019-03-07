'use strict';

// Fill random array with sequential numbers
const nums = Array.apply(null, {length: 15}).map(Function.call, Number);

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];

  array[j] = tmp;
}

console.log(nums);

function randomizer(arr, n) {
  
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random()*arr.length);
    const random2 = Math.floor(Math.random()*arr.length);
    // console.log('random 1 is ', random, random2);
    swap(arr, random, random2);
  }

  return arr;
}

console.log(randomizer(nums, 15));