// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

const hobbies = ["Sports", "Cars", "Cooking"];
hobbies.push("Reading");
hobbies.unshift("Coding");
const poppedItem = hobbies.pop();
hobbies.shift();
console.log(hobbies);

//use splice() to cut or add to arrays

//use slice() to get a range of indices in an array

//use concat() to concatenate an array to another

//retrieve index with indexOf() and lastIndexOf()

//use find() and findIndex() for

//use forEach() as an alternative to a for loop

//use map() to create a new array with a function ran on every element in original array

//use filter() to create a new array with only the elements that pass a conditional function

//use reduce() to run a function on all elements of an array and then add them up for a single value

//use split() to split a string with certain tokens

//use join() to join elements of an array together into one string

//spread operator (...) for when you don't know how many elements

//destructuring = unpacking values from an array

const prices = [10.99, 5.99, 3.99, 6.59]
const tax = 0.19

prices.map((price, idx, prices) => {
  const priceObj = {index:idx, taxAdjPrice: price * (1 + tax)};
  taxAdjPrice.push(priceObj);
});

const sortedPrices = prices.sort((a,b) => {
  if(a < b){
  return -1;
  }else if(a > b){
    return 1;
  }else{
    return 0;
  }
});

const filteredArray = prices.filter((price, index, prices) => {
  return price > 6;
});

console.log(sortedPrices.reverse());
console.log(taxAdjPrice);
