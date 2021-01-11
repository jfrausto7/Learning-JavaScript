//task 1
const array = [4, 2, 7, 34, 1, 0, 47, -12];

//filter
const filtered = array.filter(p => p > 5);

//map
const mapped = array.map(val => ({ num: val }));

//reduce
const reduced = array.reduce((prev, curr) => prev * curr, 0);


//task 2
function findMax(arr){
  console.log(arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  }));
}

findMax(array)


//task 3
function findMax2(...arr){
  let max = arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
  let min = arr.reduce(function (p, v) {
    return ( p < v ? p : v );
  });

  console.log(max, min);

  return [max, min];
}

console.log(findMax2(array));

//destructuring syntax
const [max, min] = findMax2(...array);


//task 4

//sets can't have duplicates and act as lists!
const list = new Set();
list.add(32);
list.add(-10);
list.add(8);
list.add(8);

console.log(list);


let a = [1, 2, 3];
a[100] = 6;
console.log(a, a.length);




