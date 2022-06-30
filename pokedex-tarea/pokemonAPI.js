function llamadaAPI() {
  return fetch("https://pokeapi.co/api/v2/pokemon")
    .then((r) => r.json())
    .then((rJSON) => rJSON.results)
    .catch((error) => console.log("FALLÓ" + error));
}

