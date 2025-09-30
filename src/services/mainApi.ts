import axios from "axios";

export const mainApi = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});
