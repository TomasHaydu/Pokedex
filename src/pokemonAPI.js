export async function solicitarListaPokemones() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  let rJSON = await response.json();
  return rJSON.results;
}