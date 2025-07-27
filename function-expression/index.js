//function expression = kita tuh langsung masukkin function nya ke dalam variabel ataupun sebagai callback,

//tanpa mendeklarasikannya lagi. cocok buat function yang cuma digunakan sekali doang.

const hello = function(){
    console.log("Hello");
}

hello();


const number = [1,2,3,4,5,6,7,8]

const square = number.map(function(element){
    return Math.pow(element,2);
})

const cube = number.map(function(element){
    return Math.pow(element, 3)
})

const isEven = number.filter(function(element){
    return element % 2 === 0;
})

const total = number.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(square)
console.log(cube)
console.log(isEven)
console.log(total)

