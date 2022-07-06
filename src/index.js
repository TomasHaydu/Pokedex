import { solicitarListaPokemones } from "src/pokemonAPI.js";
import {listarPokemonesEnPantalla,
clickPokemonYListarCaracteristicas} from "src/ui.js";

function inicializar() {
  solicitarListaPokemones().then((pokemones) => {
    listarPokemonesEnPantalla(pokemones)
    clickPokemonYListarCaracteristicas();
  });
}


inicializar();
