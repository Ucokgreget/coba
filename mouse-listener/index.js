const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Wooiii 😡";
})

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Jangan Pegang 😣"
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Click Me 😁"
})

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Wooiii 😡";
})

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Jangan Pegang 😣"
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Click Me 😁"
})