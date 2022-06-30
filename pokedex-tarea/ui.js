function nombrePokemon (pokemon) {
    pokemon.forEach(pokemon => {
        const nombrePokemon = pokemon.name
        const button = document.createElement('button')
        button.type = "button"
        button.className = "list-group-item list-group-item-action"
        button.innerText = nombrePokemon
        button.id = [nombrePokemon]
        document.querySelector("#listaPokemones").append(button)
    });
}

function caractetisticasPokemon (pokemon, pokemonSeleccionado) {
    pokemonAMostrar = pokemon.results.name.pokemonSeleccionado



}