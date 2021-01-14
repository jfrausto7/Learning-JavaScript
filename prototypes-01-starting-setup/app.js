class Person{
  name = 'Max';

  constructor(){
    this.age = 30;
  }

  greet(){
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

Person.prototype = {
  printAge(){
    console.log(this.age);
  }
};

const person = new Person();
person.greet();


