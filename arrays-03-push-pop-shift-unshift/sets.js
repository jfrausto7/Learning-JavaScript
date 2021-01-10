const ids = new Set(['Hi', 'from', 'set!']);

ids.add(2);

for(const entry of ids.entries){
  console.log(entry);
}

//weakset allows for garbage collection if an object in one has no other references