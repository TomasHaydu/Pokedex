export function listarPokemonesEnPantalla(pokemones) {
  pokemones.forEach((pokemon) => {
    crearBotonPokemon(pokemon);
  });
}

export function crearBotonPokemon(pokemon) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "list-group-item list-group-item-action";
  button.innerText = pokemon.name;
  button.id = pokemon.url;
  document.querySelector("#listaPokemones").append(button);
}

export function clickPokemonYListarCaracteristicas() {
  document.querySelectorAll("button").forEach(function ($botonNombre) {
    $botonNombre.addEventListener("click", mostrarListaCaracteristicas);
  });
}

export async function mostrarListaCaracteristicas(e) {
  const $button = e.target;
  document.querySelectorAll("button").forEach(function (cadaBoton) {
    cadaBoton.className = "list-group-item list-group-item-action";
  });
  $button.className = "list-group-item list-group-item-action active";
  $button["aria-current"] = "true";

  //Con la anterior funcion logro identificar a qué pokemon se clickeó y para luego imprimir usus caracterisitcas

  removerCaracteristicasAnteriores();

  mostrarTituloCaracteristicas();

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

      crearCaracteristica("Height", rJSON.height);
      crearCaracteristica("Weight", rJSON.weight);
      crearCaracteristica("Number", rJSON.id);

      document.querySelector("img").src = rJSON.sprites.back_default;
    })
    .catch((error) => console.log("FALLO" + error));

  document.querySelector("img").src =
    "https://commons.wikimedia.org/wiki/File:Loading_2.gif";
}

export function removerCaracteristicasAnteriores() {
  const removeMe = document.querySelectorAll("#poke");
  if (removeMe.length > 0) {
    for (let i = 0; i < removeMe.length; i++) {
      removeMe[i].remove();
    }
  }
}

export function mostrarTituloCaracteristicas() {
  document.querySelector("#titulo-caracteristicas").className =
    "list-group-item";
}

export function crearCaracteristica(tituloCaracteristica, caracterisitcaAPI) {
  const caracteristica = document.createElement("li");
  caracteristica.innerHTML =
    "<strong>" + tituloCaracteristica + ": </strong>" + caracterisitcaAPI;
  caracteristica.className = "list-group-item";
  caracteristica.id = "poke";
  document.querySelector("#caracteristicas").append(caracteristica);
}
