function Car(merek, tipe, tahun, warna){
    this.merek = merek,
    this.tipe = tipe,
    this.tahun = tahun,
    this.warna = warna
    this.bergerak = function(){console.log(`Mobil ${this.merek} ${this.tipe} bergerak`)}

}

const mobil1 = new Car("Honda","Civic", 2004, "Hitam");
const mobil2 = new Car("Toyota","Supra", 2002, "Putih")

console.log(mobil1.merek)
console.log(mobil1.tipe)
console.log(mobil1.tahun)
console.log(mobil1.warna)
mobil1.bergerak()

console.log(mobil2.merek)
console.log(mobil2.tipe)
console.log(mobil2.tahun)
console.log(mobil2.warna)
mobil2.bergerak()