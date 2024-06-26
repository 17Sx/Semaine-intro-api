function fetchPokemon(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then((response) => response.json())
}

async function displaypokemon(pokemon) {
    const data = await fetchPokemon(pokemon)
    document.getElementById("pokemon").innerHTML= `
    <h1>${data.name}</h1>
    <img src="${data.sprites.front_default}" alt="${data.name}" />
    `;
}

displaypokemon(130);
