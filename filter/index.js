//filter = creating new array by filtering out an array

//
const buah = ["apel", "mangga", 
                "jeruk", "semangka", "belimbing"]

let kataPendek = buah.filter(isShort) 
let kataPanjang = buah.filter(isLong)               
console.log(kataPendek)
console.log(kataPanjang)

function isShort (element){
    return element.length <= 7
}

function isLong (element){
    return element.length > 6
}



