const params = new URLSearchParams(window.location.search);
const pokemon = params.get('pokemon');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json()).then(data => {
    console.log(data);
    const name = data.name;
    const img = data.sprites.front_default;
    const height = data.height;
    const weight = data.weight;
    const types = data.types;
    const states = data.stats;
    const abilities = data.abilities;


    //ส่วนของการแสดงข้อมูล
    //ส่วนของการแสดงชื่อ
    const pokemonname = document.getElementById('pokemon-name');
    pokemonname.innerHTML = name;

    //ส่วนของการแสดงรูป
    const pokemonimg = document.getElementById('pokemon-img');
    pokemonimg.src = img;

    //ส่วนของการแสดงความสูงและน้ำหนัก
    const pokemonHeight = document.getElementById('pokemon-height');
    pokemonHeight.innerHTML = `${height} cm`;
    const pokemonWeight = document.getElementById('pokemon-weight');
    pokemonWeight.innerHTML = `${weight} kg`;

    //ส่วนของการแสดง type
    const typeList = document.getElementById('pokemon-type');
    types.forEach(type => {
        const typeName = type.type.name;
        const typeElement = document.createElement('div');
        typeElement.classList.add('badge', 'bg-primary', 'me-1');
        const a = document.createElement('a');
        a.classList.add('text-white', 'text-decoration-none');
        a.href = `type/index.html?type=${typeName}`;
        a.innerHTML = typeName;
        typeElement.appendChild(a);
        typeList.appendChild(typeElement);
    });

    const stateList = document.getElementById('pokemon-state');
    states.forEach(state => {
        const div =
            `
            <div class="d-flex justify-content-between">
                <span class="card-title"id="pokemon-state-name">${state.stat.name}</span>
                <span class="card-title" id="pokemon-state-vaule">${state.base_stat}</span>
            </div>
        `
        stateList.innerHTML += div;
    });

    const abilityList = document.getElementById('pokemon-ability');
    abilities.forEach(ability => {
        const abilityName = ability.ability.name;
        const abilityElement = document.createElement('div');
        abilityElement.classList.add('badge', 'bg-primary', 'me-1');
        const a = document.createElement('a');
        a.classList.add('text-white', 'text-decoration-none');
        a.href = `ability/index.html?ability=${abilityName}`;
        a.innerHTML = abilityName;
        abilityElement.appendChild(a);
        abilityList.appendChild(abilityElement);
    });
});