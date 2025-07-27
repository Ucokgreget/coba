const number = [1,2,3,4,5,6,7,8]

const square = number.map((element) => Math.pow(element,2))
console.log(square)


number.forEach((element, index, array) => array[index] = Math.pow(element, 2))
number.forEach((element) => console.log(element))




