


/* fetch retorna uma promisse
funcao de calback
metodo then() suecesso
metodo catch() fracasso
finaly() //requisição concluida independente do sucesso ou fracasso
*/


//const pokemonList = document.getElementById('pokemonList');
function convertePokemnoTypes(pokemonTypes){
    return pokemonTypes.map((typeSlot)=> `<li class ='type'>${typeSlot.type.name}</li>`)
}

function convertePokemonToLi(pokemon) {

    return ` <li class="pokemon">
    <span class="number">${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${convertePokemnoTypes(pokemon.types).join('')}
        </ol>

        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">

    </div>
</li>

`

}


//function concatena(pokemon) {
//  pokemonLi.innerHTML += convertePokemonList(pokemon);
//}


const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertePokemonToLi).join('');

})





