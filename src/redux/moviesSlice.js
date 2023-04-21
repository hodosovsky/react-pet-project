import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const apiKey = 'k_cxax043y';
const initLang = JSON.parse(localStorage.getItem('lang'));
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
    getFilmActors: builder.query({
      query: name => `${name}/credits`,
      providesTags: ['Movie'],
    }),
    getFilmVideos: builder.query({
      query: name => `${name}/videos?language=${initLang}`,
      providesTags: ['Movie'],
    }),
  }),
});

export const {
  useGetTopFilmsQuery,
  useGetFilmActorsQuery,
  useGetFilmVideosQuery,
} = moviesApi;