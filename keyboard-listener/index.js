const myBox = document.getElementById("myBox");
let moveAmount = 100;
let x=0;
let y=0

document.addEventListener("keydown", event =>{

    if(event.key.startsWith("Arrow")){
        myBox.textContent = "😧";
        myBox.style.backgroundColor = "tomato";

        event.preventDefault();
        
        switch(event.key){

            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;   
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`
    }
})


document.addEventListener("keyup",event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "😁"
})
