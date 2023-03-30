import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: ['Pokemon'],
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => ({ url: `pokemon/${name}`, method: 'GET' }),
      providesTags: ['Pokemon'],
    }),
    // createPokemon: builder.mutation({
    //   query: newPokemon => ({
    //     url: `pokemon`,
    //     method: 'POST',
    //     body: newPokemon,
    //   }),
    //   invalidatesTags: ['Pokemon'],
    // }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
