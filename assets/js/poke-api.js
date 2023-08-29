//Arquivo para separar códigos 
const offset = 0;
const limit = 10
const pokeApi = {}

//metodo
//função com 2 parametros passando valores por default

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url) //buscou a lista de pokemons
        .then((response) => response.json()) //response http sendo convetido em json
        .then((jsonBody) => jsonBody.results) //aqui temos nosso json, porem contém muitos detalhse paginação limits etc..
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Mapeando a lista de pokemons em uma lista de requisições do detalhe dos pokemons novo fetch 
        .then((detailRequests) => Promise.all(detailRequests)) //esperando que todas as requisições terminarem
        .then((pokemonsDetails) =>  pokemonsDetails)//retorna um alista de detalhes dos pokemons
            
      
        
    }

   


    