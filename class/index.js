class Car{
    constructor(merek, tipe, tahun, warna){
        this.merek = merek;
        this.tipe = tipe;
        this.tahun = tahun;
        this.warna = warna;
    }

    tampilkanMobil(){
        console.log(`Merek : ${this.merek}`);
        console.log(`Tipe : ${this.tipe}`);
        console.log(`Tahun : ${this.tahun}`);
        console.log(`Warna: ${this.warna}`)
    }

    bergerak(){
        console.log(`Mobil ${this.merek} ${this.tipe} bergerak`)
    }
}

const mobil1 = new Car("Honda", "Civic", 2004, "Hitam");

mobil1.bergerak()
mobil1.tampilkanMobil()