const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);


const person = {
    name: 'max'
}

const max = {
    ...person,
    age: 28
}

console.log(max);

