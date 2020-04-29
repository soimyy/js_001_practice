const person = {
    name: 'max'
}

// const secondPerson = {
//     ...person
// }

const secondPerson = person;

secondPerson.name = 'john'

console.log(person.name);
console.log(secondPerson.name);




let num1 = 1;
let num2 = num1;

num1 = 2;
// num2 = 2;

console.log(num1);
console.log(num2);

