// INDICANDO EL USE DE AXIOS PARA LA API
const axios = require("axios").default;
// BASE URL DE LA API
const apiUrl = "https://rickandmortyapi.com/api";

// FUNCION PARA COGER TODOS LOS PERSONAJES
/* getAll() {
  axios.get(`${apiUrl}/character`).then(function(response) {
    console.log(response);
  });
}
*/
function getAll() {
  return axios.get(`${apiUrl}/character`);
}

export default {
  getAll,
};
