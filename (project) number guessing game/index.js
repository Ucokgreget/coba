const min = 1;
const max = 100;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(answer)


let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${min} and ${max}:`);
    guess = Number(guess);

    if (isNaN (guess)) {
        window.alert("Masukkin angka cok")
    }else if (guess <min || guess > max){
        window.alert("goblok masukin yang bener lah");
    }else{
        attempts++;
        if (guess < answer){
            window.alert("kekecilan masih");
        }else if (guess > answer){
            window.alert("kebesaran cok");
        }else{
            window.alert(`Horee lu berhasil nebak! jawabannya ${answer} dan butuh ${attempts} kali`);
            running = false;
        }
    }
    
}
