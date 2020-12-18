const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("Greater than 0.7!");
}

const array = [4, 5, 6, 3, 2, 1];

for (let i = array.length - 1; i > 0; i--) {
  console.log(array[i]);
}

for (const num of array) {
  console.log(num);
}

const randomNum = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (
  (randomNumber > 0.7 && randomNum > 0.7) ||
  randomNumber <= 0.2 ||
  randomNum <= 0.2
) {
  alert("Yeet");
}
