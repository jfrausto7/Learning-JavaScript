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
