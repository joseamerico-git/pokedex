

/* fetch retorna uma promisse
funcao de calback
metodo then() suecesso
metodo catch() fracasso
finaly() //requisição concluida independente do sucesso ou fracasso
*/


//const pokemonList = document.getElementById('pokemonList');
//function convertePokemnoTypes(pokemonTypes){
//  return pokemonTypes.map((typeSlot)=> `<li class ='type'>${typeSlot.type.name}</li>`)
//}

/*

function convertePokemonToLi(pokemon) {

    return ` <li class="pokemon ${pokemon.type}">
    <span class="number">${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}" alt="${pokemon.name}">

    </div>
</li>

`
}
*/

const pokemonList = document.getElementById('pokemonList')
const btnNext = document.getElementById('btn-next')

const maxRecords = 15;
const lim = 5
let offs = 0






function loadPokemonsItems(offs, lim) {
    pokeApi.getPokemons(offs, lim).then((pokemons = []) => {

        const newHtml = pokemons.map((pokemon) =>
            ` <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">

                </div>
            </li>

`
        ).join('')
        pokemonList.innerHTML += newHtml

    })

}

loadPokemonsItems(offs, lim)

btnNext.addEventListener('click', () => {
    offs += lim;
    const qtdRecord = offs + lim;

    if (qtdRecord >= maxRecords) {
        const newLimit = maxRecords - offs;
        loadPokemonsItems(offs, newLimit);

        btnNext.parentElement.removeChild(btnNext)
    } else {
        loadPokemonsItems(offs, lim);
    }

})





