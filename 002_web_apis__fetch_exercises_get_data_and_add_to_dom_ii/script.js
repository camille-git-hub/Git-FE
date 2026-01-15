// You can work here or download the template
const pokemonCards = document.getElementById('pokemon-container');
const path = 'https://pokeapi.co/api/v2/pokemon?limit=40'


fetch(path)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then((response) => response.json())
            .then(cardDetails => {
                const pokemonCard = document.createElement('div');
                pokemonCard.innerHTML = `<li>${cardDetails.name}</li><img src='${cardDetails.sprites.front_default}'/>`;
                pokemonCard.style.padding = '10px';
                pokemonCard.style.textTransform = 'capitalize';
                pokemonCard.style.listStyle = 'none';
                pokemonCard.style.marginLeft = '10px';
                pokemonCards.appendChild(pokemonCard);
            });
        });
    })
  .catch((error) => {
    console.error('Error fetching Pokémon data:', error);
  });

 


