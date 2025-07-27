const nilai = [95, 54, 80, 70, 33, 76]

const getMax = (accumulator, element) => Math.max(accumulator, element);

let maximum = nilai.reduce(getMax)
let minimum = nilai.reduce(getMin)
console.log(maximum)
console.log(minimum)




function getMin(accumulator, element){
    return Math.min(accumulator, element)
}