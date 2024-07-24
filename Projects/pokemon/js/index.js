import { LoadPokemon, LoadMorePokemon } from './PokemonManager.js';
const loadMoreButton = document.getElementById('load-more');
let loadAmount = 10;

function Show(pokemons) {
    const pokemoncontainer = document.getElementById('pokemon-container');
    const loading = document.getElementById('loading');
    pokemons.forEach(pokemon => {
        fetch(pokemon.url).then(res => res.json()).then(data => {
            console.log(data);
            const name = data.name;
            const img = data.sprites.front_default;

            const pokemonElement = document.createElement('div');
            pokemonElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <a href="details/index.html?pokemon=${name}">
                <img src="${img}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title
                    ">${name}</h5>
                </div>
            </a>
            `;

            pokemonElement.appendChild(card);
            pokemoncontainer.appendChild(pokemonElement);
        })
    });
}

loadMoreButton.addEventListener('click', async (e) => {
    loadMoreButton.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    `
    loadAmount += 10;
    const pokemons = await LoadMorePokemon(loadAmount - 10, loadAmount);
    Show(pokemons);
    loadMoreButton.innerHTML = 'Load More';
});

const pokemons = await LoadPokemon(loadAmount);
Show(pokemons);