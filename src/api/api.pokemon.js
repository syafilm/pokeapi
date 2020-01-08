/* eslint-disable */
import axios from 'axios'

const BASE_URL = `https://pokeapi.co/api/v2`

function index(offset, limit) {
  return axios.get(`${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`)
}

function show(id) {
  return axios.get(`${BASE_URL}/pokemon/${id}`)
}

const ApiPokemon = {
  index,
  show,
}

export default ApiPokemon