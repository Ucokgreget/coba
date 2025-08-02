const token = 'BQAtlJspnxoNiYToOOvrYVgELY7-MOx2jbeHj8pHlOVIL9IrCtua6c42UXdAJrsUegwOwCBu9yXLjKgTmREsFqxncc3PrioEUZ8wtDcarGh0JrGd2i3vVXhG-OkzPiPbT3lqNb4DmZRb7oJl3a9BZ2le3YM45-1iqk7B03BmH5EgF-PC7NSvjmygvt-lr9GE0Cg_8pXkmOHpyAZm7hDsBoCZlREfw3iA72NxXO0F_YbrYuUIbrDjYFiKK4mite61ERkoqop6y-PbVPFGlmxs0dZ-ZYCmyI8rNfoPQ_CjGCGbUesSHuppZlvzJ-MbmBkq';

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: body ? JSON.stringify(body) : undefined
  });
  return await res.json();
}

async function getTopTracks(){
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

async function main() {
  const topTracks = await getTopTracks();
  console.log(
    topTracks?.map(
      ({ name, artists }) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
  );
}

main();
