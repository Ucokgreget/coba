const fruits = [{name:"Apel", color:"Merah", calories:76},
                {name:"Semangka", color:"Hijau", calories:120},
                {name:"Pepaya", color:"Jingga", calories:37},
                {name:"Nanas", color:"Kuning", calories:110},
                {name:"Pisang", color:"Kuning", calories:82}]


console.log(fruits[1].color)

//--------forEach()-------------------

fruits.forEach(function (fruit){
               console.log(fruit)
})

//-------map()---------------------------

const fruitNames = fruits.map(fruit => fruit.name)


console.log(fruitNames)

//-----------------------filter()------------------

const yellowFruit = fruits.filter(fruit => fruit.color === "Kuning")
const lowCalories = fruits.filter(fruit => fruit.calories < 100)
const highCalories = fruits.filter(fruit => fruit.calories >= 100)

console.log(highCalories)


//-------------reduce()--------------------

const maxCalories = fruits.reduce((max, fruit) =>
                                  fruit.calories > max.calories ? 
                                  fruit : max )

const minCalories = fruits.reduce(  (min, fruit) => 
                                    fruit.calories < min.calories ? 
                                    fruit : min)


console.log(minCalories)
