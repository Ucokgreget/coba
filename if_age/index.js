const myInput = document.getElementById("myInput");
const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
let age;

mySubmit.onclick = function(){

    age = myInput.value; 
    age = Number(age);

    if(age >= 100){
        myText.textContent = `Lu tua amat bjir`
    }
    else if (age == 0){
        myText.textContent = `jir lu baru lahir udah main hp aja tong`;
    }
    else if (age >= 18){
        myText.textContent = 'nah udah masuk aja sini';
    }
    else if (age < 0){
        myText.textContent = `jir gimana caranya umur bisa negatif cok`;
    }
    else {
        myText.textContent = `lu gaboleh masuk sat`;
    }
}

