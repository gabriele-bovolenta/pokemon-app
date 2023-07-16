import { CountPokemonType, PokemonDetailType } from "../Types/types";

const BASE_URL = 'https://pokeapi.co/api/v2/';
const limitNumber = 50;
const limitQuery = `?limit=${limitNumber}`;

export const getAllPokemon = async () => {
  try {
    const res = await fetch(`${BASE_URL}pokemon/${limitQuery}`);
    if (!res.ok) {
      throw new Error('Failed to fetch all Pokemon');
    }
    const data: CountPokemonType = await res.json();
    return data;
  } catch (error) {
    console.error('Error in getAllPokemon:', error);
    throw error;
  }
};

export const getPokemonById = async (id: number) => {
  try {
    if (id < 0) {
      throw new Error('Invalid Pokemon ID');
    }
    const res = await fetch(`${BASE_URL}pokemon/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch Pokemon by ID');
    }
    const data: PokemonDetailType = await res.json();
    return data;
  } catch (error) {
    console.error('Error in getPokemonById:', error);
    throw error;
  }
};

export const getPokemonByName = async (name: string) => {
  try {
    const res = await fetch(`${BASE_URL}pokemon/${name}`);
    if (!res.ok) {
      throw new Error('Failed to fetch Pokemon by name');
    }
    const data: PokemonDetailType = await res.json();
    return data;
  } catch (error) {
    console.error('Error in getPokemonByName:', error);
    throw error;
  }
};


