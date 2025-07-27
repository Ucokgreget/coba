
const student = ["kaoruko", "rintaro", "subaru"]

const studentUpper = student.map(upperCase)
console.log(studentUpper);

const studentLower = student.map(lowerCase)
console.log(studentLower);

const studentCapital = student.map(capitalize)
console.log(studentCapital);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

function capitalize (element){
    return element.charAt(0).toUpperCase() + element.slice(1)
}


