'use strict';

const qSort = require('./quickSort');

/* Sorting books

Imagine that I gave you twenty books to sort in alphabetical order. 

How would you go about it? 
---------------------------
We can use the built-in javascript operators, as they already sort lexicographically

Can you express this as an algorithm?
---------------------------------------
Yes. We could use any of the sorting algorithms. The built-in comparison operators are used
in the sorting algorithms. Those would work in this scenario.

let compare = 'bb' > 'ba';
*/

const books = ['Lord of the Rings', 'Game of Thrones', 'Life of Pi', 'The Bible'];


console.log(qSort(books));