const myInput = document.getElementById("myInput");
const mySubmit = document.getElementById("mySubmit");
const myH2 = document.getElementById("myH2");
let nilai;
let letterGrade;

mySubmit.onclick = function(){
    nilai = myInput.value;
    nilai = Number(nilai);
    
    switch(true){
        case nilai >= 90:
            letterGrade = "A";
            myH2.textContent = letterGrade;
            break
        case nilai >=80:
            letterGrade = "B";
            myH2.textContent = letterGrade;
            break
        case nilai >= 70:
            letterGrade = "C";
            myH2.textContent = letterGrade;
            break
        case nilai >=60:
            letterGrade = "D";
            myH2.textContent = letterGrade;
            break
        default:
            letterGrade = "F"
            myH2.textContent = letterGrade;

    }


}
