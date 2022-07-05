function llamadaAPI() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((r) => r.json())
    .then((rJSON) => {
      nombrePokemon(rJSON.results);
        let next = rJSON[2]})
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

  const removeMe = document.querySelectorAll("#poke");
  if (removeMe.length > 0 ) {
    for (let i = 1; i < removeMe.length; i++) {
      removeMe[i].remove();
    }
  }

  document.querySelector("#titulo-caracteristicas").className = "list-group-item"

  fetch($button.id)
    .then((r) => r.json())
    .then((rJSON) => {
      rJSON.abilities.forEach(function (habilidad) {
        const caracteristica = document.createElement("li");
        caracteristica.innerHTML =
          "<strong>Ability: </strong>" + habilidad.ability.name;
        caracteristica.className = "list-group-item";
        caracteristica.id = "poke";
        document.querySelector("#caracteristicas").append(caracteristica);
      });
      const caracteristica = document.createElement("li");
      caracteristica.innerHTML = "<strong>Height: </strong>" + rJSON.height;
      caracteristica.className = "list-group-item";
      caracteristica.id = "poke";
      document.querySelector("#caracteristicas").append(caracteristica);

      const caracteristica2 = document.createElement("li");
      caracteristica2.innerHTML = "<strong>Weight: </strong>" + rJSON.weight;
      caracteristica2.className = "list-group-item";
      caracteristica2.id = "poke";
      document.querySelector("#caracteristicas").append(caracteristica2);

      const caracteristica3 = document.createElement("li");
      caracteristica3.innerHTML = "<strong>Number: </strong>" + rJSON.id;
      caracteristica3.className = "list-group-item";
      caracteristica3.id = "poke";
      document.querySelector("#caracteristicas").append(caracteristica3);

      document.querySelector("img").src = rJSON.sprites.back_default;
    })
    .catch((error) => console.log("FALLO" + error));
}