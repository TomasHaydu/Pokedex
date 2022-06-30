function llamadaAPI() {
    return fetch("https://pokeapi.co/api/v2/pokemon")
      .then((r) => r.json())
      .then((rJSON) => nombrePokemon(rJSON.results))
      .catch((error) => console.log("FALLÓ" + error));
  }
  
  function nombrePokemon (pokemones) {
    pokemones.forEach((pokemon) => {
        const nombrePokemon = pokemon.name
        const button = document.createElement('button')
        button.type = "button"
        button.className = "list-group-item list-group-item-action"
        button.innerText = nombrePokemon
        button.id = [nombrePokemon]
        document.querySelector("#listaPokemones").append(button)
    });
}  
nombrePokemon(llamadaAPI())

document.querySelectorAll('button').forEach(function ($nombre){
    $nombre.onclick = buttonClick()
})

function buttonClick (e){
    const $button = e.target
    $button.className = "list-group-item list-group-item-action active"
}
