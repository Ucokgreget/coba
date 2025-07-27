//spread = atau (...) adalah suatu method untuk mengeluarkan variabel-variabel yang ada di dalam array


/*let foods = ["ketoprak", "sate", "bakso"];

console.log(...foods)
*/

/*
let angka = [1,2,3,4,5]

let max = Math.max(...angka)
let min = Math.min(...angka)

console.log(max)
console.log(min)
*/

/*
let username = "luckyman"
let letter = [...username].join("-")

console.log(letter)
*/

let fruits = ["pisang", "mangga", "apel"];

let vegetable = ["kol", "kacang", "kentang"];

let food = [...fruits, ...vegetable, "telur"]

console.log(food)