// You can work here or download the template
const pokemonContainer = document.getElementById('pokemon-container');
const path = 'https://pokeapi.co/api/v2/pokemon?limit=40'

//Function to fetch the pokemon

//with async await function to fetch one pokemon by id

async function fetchPokemon(id) {
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon = await res.json();
        return pokemon;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

//function to create the pokemon card

function createPokemonCard (pokemon){
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'flex', 'flex-col', 'item-center', 'text-center');
    
    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add("mb-2");
    
    const pokemonName = document.createElement("h2");
    pokemonName.textContent = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`;
    pokemonName.classList.add('text-xl', 'font-bold')

    const pokemonInfo = document.createElement("p");
    pokemonInfo.textContent = `ID: ${pokemon.id} | ${pokemon.types.map(typeInfo => typeInfo.type.name).join(", ")}`;
    pokemonInfo.classList.add('text-gray-600');

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonInfo);
    pokemonContainer.appendChild(pokemonCard);
    };


//function to display the pokemons

async function displayPokemons() {
    for(let i = 1; i <= 150; i++){
        const pokemon = await fetchPokemon(i);
        if(pokemon){
            createPokemonCard(pokemon);
        }
    }
};

displayPokemons();


//or alternative using then catch

/* fetch(path)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then((response) => response.json())
            .then(cardDetails => {
                const pokemonCard = document.createElement('div');
                pokemonCard.innerHTML = `<li>${cardDetails.name}</li><img src='${cardDetails.sprites.front_default}'/>`;
                pokemonCard.classList.add('p-10', 'ml-10px','flex', 'flex-col', 'item-center', 'text-center')
                pokemonContainer.appendChild(pokemonCard);
            });
        });
    })
  .catch((error) => {
    console.error('Error fetching Pokémon data:', error);
  });  */

 


