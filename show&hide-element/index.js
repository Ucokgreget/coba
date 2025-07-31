const tambah = document.getElementById("tambah-btn");
const kurang = document.getElementById("kurang-btn");
const nilai = document.getElementById("nilai")
const myImg = document.getElementById("myImg");

const jumlahManipulasi = 0.05;
myImg.style.opacity = 1;


tambah.addEventListener("click", event => {
    let currentOpacity = parseFloat(myImg.style.opacity);
    if (currentOpacity < 1){
        myImg.style.opacity = Math.min(currentOpacity + jumlahManipulasi, 1)
        console.log(currentOpacity);
        nilai.textContent = Math.floor(Number(myImg.style.opacity) * 100) + "%"
    }
})

kurang.addEventListener("click", event => {

    let currentOpacity = parseFloat(myImg.style.opacity);
    if(currentOpacity > 0){
        myImg.style.opacity = Math.max(currentOpacity - jumlahManipulasi, 0);
        console.log(currentOpacity)
        nilai.textContent = Math.floor(Number(myImg.style.opacity) * 100) + "%"
    }
    ;
})


document.addEventListener("keydown", event => {
    let currentOpacity = parseFloat(myImg.style.opacity);

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowLeft":
                if(currentOpacity > 0){
                    myImg.style.opacity = Math.max(currentOpacity - jumlahManipulasi, 0)
                    nilai.textContent = Math.floor(Number(myImg.style.opacity) * 100) + "%"
                };
                break;
            
            case "ArrowRight":
                if (currentOpacity < 1){
                    myImg.style.opacity = Math.min(currentOpacity + jumlahManipulasi, 1);
                    nilai.textContent = Math.floor(Number(myImg.style.opacity) * 100) + "%";
                }
                break;
        }
    }
})