
//Example 1
//Swap two value of variables

let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a)
console.log(b)


//Example 2
//Swap elements of an array
const color = ["red", "green", "blue", "black", "white"];
[color[0], color[4]] = [color[4], color[0]];

console.log(color)

//Example 3
//Assign value to a variable

const color2 = ["red", "green", "blue", "black", "white"]
const [firstColor, secondColor, thirdColor, ...extraColor ] = color2
console.log(extraColor)


//Example 4
//Extract value from object
/*
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepanrs",
    age: 20,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

const {firstName, lastName, age, job="Unemployed" } = person2;

console.log(`${firstName} ${lastName}`)
console.log(age)
console.log(job)
*/

//Example 5
//Destructure in Function Parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`${firstName} ${lastName}`)
    console.log(age)
    console.log(job)
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepanrs",
    age: 20,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 30,
}

displayPerson(person1);



