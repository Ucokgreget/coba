
sum(displayDOM,6,4)

function sum (callback, x, y){
    let result = x+y;
    callback(result)
}

function displayResult(result){
    console.log(result)
}

function displayDOM(result){
    document.getElementById("myP").textContent = result;
}