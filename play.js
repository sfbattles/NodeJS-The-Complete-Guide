"use strict"

const person = {
   name: "richard",
   age: 48,
   greet() {
       console.log(`hi, I am ${this.name}`);
   }
};

//object destructuring
const printName = ( { name} ) => {  
  return name
}
//object destructuring
const {name, age } = person
console.log (name, age)


console.log(printName(person))

const copiedPerson = {...person};  //spread operator
console.log(copiedPerson)

const hobbies = ['sports', 'cooking'];
//array destructuring
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2)

for (let hobby of hobbies) {
    console.log(hobby)
}

hobbies.forEach((hobby, index) => {
  console.log(hobby);
}); 

hobbies.push('programming');
console.log(hobbies);

//spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {   //rest operator
  return args;
}

console.log(toArray(1,2,3,4))
