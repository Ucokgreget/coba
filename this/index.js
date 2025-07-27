const car = {
    merek: "Honda",
    tahun: 2020,
    warna: "merah",
    bergerak: function() {console.log(`mobil ${this.merek} bergerak`)}
}

console.log(car.merek)
car.bergerak()