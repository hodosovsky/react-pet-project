import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const apiKey = 'k_cxax043y';
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://imdb-api.com/en/API/`,
  }),
  tagTypes: ['Movie'],
  endpoints: builder => ({
    getTopFilms: builder.query({
      query: name => ({ url: `${name}/${apiKey}`, method: 'GET' }),
      providesTags: ['Movie'],
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

export const { useGetTopFilmsQuery } = moviesApi;
