let number = [1,2,3,4,5];

number.forEach(isEven)
number.forEach(display)


function double (element, index, array){
    array[index] = element * 2;
}

function triple (element, index, array){
    array[index] = element * 3;
}

function square (element,index, array){
    array[index] = Math.pow(element, 2)
}

function dibagi_2 (element, index, array){
    array[index] = element/2;
}

function isEven (element){
    if (element %2 === 0){
        console.log(element);
    }
}

function display (element){
    console.log(element)
}