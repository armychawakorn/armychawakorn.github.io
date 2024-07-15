const params = new URLSearchParams(window.location.search);
const pokemon = params.get('pokemon');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json()).then(data => {
    const name = data.name;
    const img = data.sprites.front_default;

    const pokemonName = document.getElementById('pokenmon-name');
    pokemonName.innerHTML = name;

    const card = document.getElementById('pokemon-card');

    const pokemonimg = document.getElementById('pokemon-img');
    pokemonimg.src = img;

    const pokemonname = document.getElementById('pokemon-name');
    pokemonname.innerHTML = name;
});