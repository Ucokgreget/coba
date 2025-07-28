try{
    const angka = Number(window.prompt("Masukkan angka yang mau dibagi: "))
    const pembagi = Number(window.prompt("Masukkan angka pembagi: "))

    if(pembagi == 0){
        throw new Error("Woi gabisa lu bagi sama 0 lah")
    }

    if(isNaN(angka) || isNaN(pembagi)){
        throw new Error("woi masukkin angka bjir")
    }

    const result = angka / pembagi;
    console.log(result)

}
catch(error){
    console.error(error)
}
finally{
    console.log("This is always executed")
}
console.log("akhir udah")