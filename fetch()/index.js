
fetchData();
async function fetchData() {

  try{
      
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
        throw new Error("mana bisa jir")
    }
    
    const data = await response.json();

    if (!data.sprites || !data.sprites.front_default) {
      throw new Error("Gambar Pokémon tidak tersedia");
    }

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style = "block"
    console.log(data)
  }catch(error){
    const myP = document.getElementById("errorMessage")
    myP.textContent = error
    myP.style.display = "block"
    console.error(error);

  }
}