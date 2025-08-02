
fetchData();
document.getElementById("namaAnime").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    fetchData();
  }
});

async function fetchData() {

    try{
        const namaAnime = document.getElementById("namaAnime").value.toLowerCase();
        const query = encodeURIComponent(namaAnime.trim());
        const response = await fetch(`https://api.jikan.moe/v4/characters?q=${query}`)
    
        const data = await response.json();
        console.log(data)
        
        const hasil = document.getElementById("hasil")
        hasil.innerHTML = "";

        data.data.forEach((karakter) =>{
            const nama = karakter.name
            const gambar = karakter.images.jpg.image_url;

            const card = document.createElement("div")
            card.className = "character-card";
            card.innerHTML = `
            <p><strong>${nama}</strong></p>
            <img src="${gambar}" alt="${nama}" width="150" class="gambar-anime">
            `;
            hasil.appendChild(card)
        });
    }
    catch(error){
        console.error(error);
        
    }
    
}

fetch("http://localhost:26538")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
