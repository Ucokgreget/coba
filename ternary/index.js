const myPrice = document.getElementById("myPrice");
const mySubmit = document.getElementById("mySubmit");
const myTotal = document.getElementById("myTotal");

let price;
let discount;

mySubmit.onclick = function(){
    price = myPrice.value;
    price = Number(price)
    
    discount = price >= 100 ? 10 : 0;

    myTotal.textContent = `Total belanja anda adalah $${price - price * (discount/100)}`
}




