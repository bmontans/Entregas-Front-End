import config from "./config.js";
const axios = require("axios").default;

// la constante apikey nos pilla la key del config.js //
const apiKey = config.apikey;
const BASE_URL = "https://ws.audioscrobbler.com/";
const URL_GEO =
  "2.0/?method=geo.gettopartists&country=spain&api_key=" +
  apiKey +
  "&format=json";
const URL_TRACK =
  "/2.0/?method=geo.gettoptracks&country=spain&api_key=" +
  apiKey +
  "&format=json";
const URL_TAG =
  "/2.0/?method=chart.gettoptags&api_key=" + apiKey + "&format=json";

// Estas funciones nos darán los datos actualizados en cada visita //

async function getArtists() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_GEO}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
async function getTopTracks() {
  try {
    const responseTrack = await axios.get(`${BASE_URL}${URL_TRACK}`);
    return responseTrack;
  } catch (error) {
    console.error(error);
  }
}
async function getTags() {
  try {
    const responseTag = await axios.get(`${BASE_URL}${URL_TAG}`);
    return responseTag;
  } catch (error) {
    console.error(error);
  }
}
export default {
  getArtists,
  getTopTracks,
  getTags,
};
