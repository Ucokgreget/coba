const turun = document.getElementById("turun");
const reset = document.getElementById("reset");
const naik = document.getElementById("naik");
const countLabel = document.getElementById("countLabel");
let angka = 0;

turun.onclick = function(){
    angka--;
    countLabel.textContent = angka;
}

naik.onclick = function(){
    angka++;
    countLabel.textContent = angka;
}

reset.onclick = function(){
    angka = 0;
    countLabel.textContent = angka;
}




