//Step 1 - Create Element
const H2 = document.createElement("h2")
const box2 = document.getElementById("box2")
//Step 2 - Add Attributes/Properties
H2.textContent = "Woi"
H2.style.backgroundColor = "yellow"
//Step 3 - Appends Element to DOM 
//document.body.prepend(H2);
//document.body.append(H2);
//document.getElementById("box1").prepend(H2)
//document.getElementById("box1").append(H2)
//document.body.insertBefore(H2, box2);


const boxes = document.querySelectorAll(".box")
document.body.insertBefore(H2, boxes[2])


//Remove Element

document.body.removeChild(H2)