fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').then(res => res.json()).then(data => {
    const pokemoncontainer = document.getElementById('pokemon-container');
    const pokemons = data.results;
    pokemons.forEach(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(res => res.json()).then(data => {
            console.log(data);
            const name = data.name;
            const img = data.sprites.front_default;
            const url = data.url;

            console.log(name, img, url);

            const pokemonElement = document.createElement('div');
            pokemonElement.classList.add('col');
            pokemonElement.classList.add('col-md-2');

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
}).catch(err => console.log(err));