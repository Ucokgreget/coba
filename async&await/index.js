/*

Ada tiga tugas yang harus dilakukan, tapi semuanya adalah asynchronous operations

Lu disuruh emak lu buat:
1. Beli Garam
2. Bersihiin kamar
3. Buang sampah

Pake new Promises (resolve, rejected)
*/

function beliGaram(){

    return new Promise((resolve, rejected) => {

        const beligarem = true;

        if(beligarem){
            setTimeout(() => {
                resolve("Lu beli garam")
            }, 1000);
        }
        else{
            rejected("Lu ngapain kagak beli hah?!")
        }


    });    
}


function bersihiinKamar(){

    return new Promise((resolve, rejected) => {

        const bersihiin = true;

        if(bersihiin){
            setTimeout(() => {
                resolve("Lu bersihiin kamar")
            }, 2500);
        }else{
            rejected("Lu ngapa kagak bersihiin tuh kamar?")
        }
        
    });
   
}

function buangSampah(){

    return new Promise((resolve, rejected) => {

        const buang = false;

        if(buang){
            setTimeout(() => {
                resolve("Lu buang sampah")
            }, 500);
        }
        else{
            rejected("Lu ngapain kagak buang sampah?!")
        }

        
    });
}

async function lakuinTugas() {

    try{
        const beligaremresult = await beliGaram();
        console.log(beligaremresult);

        const bersihiinKamarResult = await bersihiinKamar();
        console.log(bersihiinKamarResult);

        const buangSampahResult = await buangSampah();
        console.log(buangSampahResult)

        console.log("selesai")
    }catch(error){
        console.error(error)
    }
    
    
}


lakuinTugas();