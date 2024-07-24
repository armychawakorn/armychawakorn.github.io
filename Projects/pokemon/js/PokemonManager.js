async function LoadPokemon(amount) {
    const cachedPokemons = localStorage.getItem('pokemons');
    let pokemons = JSON.parse(cachedPokemons);

    if (!pokemons) {
        localStorage.setItem('pokemons', JSON.stringify([]));
        pokemons = [];
    }

    if (amount > pokemons.length) {
        console.log('fetching');
        await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`).then(res => res.json()).then(data => {
            const pokemons = data.results;
            localStorage.setItem('pokemons', JSON.stringify(pokemons));
        }).catch(err => console.log(err));
    }
    return JSON.parse(localStorage.getItem('pokemons')).slice(0, amount);
}


async function LoadMorePokemon(start, end) {
    const cachedPokemons = localStorage.getItem('pokemons');
    let pokemons = JSON.parse(cachedPokemons);

    if (!pokemons) {
        localStorage.setItem('pokemons', JSON.stringify([]));
        pokemons = [];
    }

    if (end > pokemons.length) {
        console.log('fetching');
        await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${end}&offset=0`).then(res => res.json()).then(data => {
            const pokemons = data.results;
            localStorage.setItem('pokemons', JSON.stringify(pokemons));
        }).catch(err => console.log(err));
    }
    return JSON.parse(localStorage.getItem('pokemons')).slice(start, end);
}


export {LoadPokemon, LoadMorePokemon};