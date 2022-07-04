function llamadaAPI() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((r) => r.json())
    .then((rJSON) => nombrePokemon(rJSON.results))
    .catch((error) => console.log("FALLÓ" + error));
}

async function nombrePokemon(pokemones) {
  await pokemones.forEach((pokemon) => {
    const nombrePokemon = pokemon.name;
    const urlPokemon = pokemon.url;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "list-group-item list-group-item-action";
    button.innerText = nombrePokemon;
    button.id = urlPokemon;
    document.querySelector("#listaPokemones").append(button);
    clickPokemon();
  });
}

llamadaAPI();

function clickPokemon() {
  document.querySelectorAll("button").forEach(function ($botonNombre) {
    $botonNombre.addEventListener("click", buttonClick);
  });
}

async function buttonClick(e) {
  const $button = e.target;
  document.querySelectorAll("button").forEach(function (cadaBoton) {
    cadaBoton.className = "list-group-item list-group-item-action";
  });
  $button.className = "list-group-item list-group-item-action active";
  $button["aria-current"] = "true";


  fetch ($button.id)
  .then((r) => r.json())
  .then ((rJSON) => 
    (rJSON.abilities).forEach(function (habilidad){
        const caracteristica = document.createElement('li')
        caracteristica.innerHTML = "<strong>Ability: </strong>" + habilidad.ability.name
        caracteristica.className = "list-group-item"
        document.querySelector("#caracteristicas").append(caracteristica)
    }))
    .catch((error) => console("FALLO" + error))




  }
