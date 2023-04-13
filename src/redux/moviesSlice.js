import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const apiKey = 'k_cxax043y';
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://movies-1l0g.onrender.com/api/`,
  }),
  tagTypes: ['Movies'],
  endpoints: builder => ({
    getTopFilms: builder.query({
      query: name => name,
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
