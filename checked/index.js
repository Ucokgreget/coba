const myCheckbox = document.getElementById("myCheckbox");
const gopay = document.getElementById("gopay");
const dana = document.getElementById("dana");
const bank = document.getElementById("bank");
const mySubmit = document.getElementById("mySubmit");
const hasilSubscribe = document.getElementById("hasilSubscribe");
const hasilPembayaran = document.getElementById("hasilPembayaran");

mySubmit.onclick = function(){
    if(!myCheckbox.checked && !gopay.checked && !dana.checked && !bank.checked){
        hasilSubscribe.textContent = `kamu belum milih apa2 :v`;
        return;
    }

    if(myCheckbox.checked){
        hasilSubscribe.textContent = `kamu udah subscribe`;
    }else{
        hasilSubscribe.textContent = `kamu kok belum subscribe`;
    }

    if(gopay.checked){
        hasilPembayaran.textContent = `kamu bayar pake gopay`;
    }else if(dana.checked){
        hasilPembayaran.textContent = `kamu bayar pake dana`;
    }else if(bank.checked){
        hasilPembayaran.textContent = `kamu bayar pake bank`
    }else{
        hasilPembayaran.textContent = `kamu belum milih metode pembayaran`;
    }
}

