const params = new URLSearchParams(window.location.search);
const ability = params.get('ability');

const abilitylabel = document.getElementById('ability-label');
abilitylabel.innerHTML = ability.charAt(0).toUpperCase() + ability.slice(1);

fetch(`https://pokeapi.co/api/v2/ability/${ability}`).then(res => res.json()).then(data => {
    const pokemons = data.pokemon;
    console.log(pokemons);

    pokemons.forEach(pokemon => {
        fetch(pokemon.pokemon.url).then(res => res.json()).then(data => {
            console.log(data);
            const name = data.name;
            const img = data.sprites.front_default;

            const pokemonElement = document.createElement('div');
            pokemonElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <a href="../index.html?pokemon=${name}">
                <img src="${img}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                </div>
            </a>`;
            pokemonElement.appendChild(card);
            document.getElementById('pokemon-container').appendChild(pokemonElement);
        });
    });
});