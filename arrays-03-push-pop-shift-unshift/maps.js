const person1 = {name: "Max"};
const person2 = {name: "Manuel"};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
console.log(personData);

for (const [key, value] of personData.entries()){
  console.log(key, value);
}

for (const key of personData.keys()){
  console.log(key);
}

for(const value of personData.values()){
  console.log(value);
}

console.log(personData.size);


//maps vs objects: maps better performance for bigger data quantaties


//weakmap ONLY accepts objects as keys for garbage collection