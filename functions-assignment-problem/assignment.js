const say = (phrase = "Hi", name) => {
  console.log(phrase + " " + name);
};

const say2 = () => {
  console.log("Hey you.");
};

const say3 = (name) => {
  const msg = "Hi " + name;
  return msg;
};

const checkInput = (...input) => {
  for (const i of input) {
    if (i === "") {
      function cb() {
        console.log("Callback function worked.");
      }
      cb();
      return;
    }
  }
  console.log("worked normally");
};

say("Hi", "Jacob");
say2();
console.log(say3("Josh"));
checkInput("yeet", "yah", "yoo");
checkInput("nah", "this", "aint", "it", "");
