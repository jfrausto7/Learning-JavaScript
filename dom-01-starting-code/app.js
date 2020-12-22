const h1 = document.getElementById("main-title");

h1.textContent = "Some new title!";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("ul:first-of-type").children[1];
li.textContent = li.textContent + " yeah";

const body = document.body;
// body.querySelector()

const listItemElements = document.getElementsByTagName("li"); //live list of items. querySelector is not live

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const section = document.querySelector('section');
const button = document.querySelector('button');

console.log(button);

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if(section.className === 'red-bg visible'){
  //   section.className = 'red-bg invisible';
  // }else{
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});


//add element
const newLi = document.createElement('li');
newLi.textContent = 'new shtuff';
const list = document.querySelector('ul:first-of-type');
list.appendChild(newLi);