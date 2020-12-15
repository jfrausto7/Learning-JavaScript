const task3Element = document.getElementById("task-3");

function helloWorld() {
  alert("hello world!");
}

function sayName(name) {
  alert("hello " + name);
}

function combine(a, b, c) {
  result = a + b + c;
  alert(result);
}

helloWorld();
sayName("Jacob");
combine("aye", "my", "guy");

task3Element.addEventListener("click", helloWorld);
