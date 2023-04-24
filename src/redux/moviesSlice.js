import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://movies-1l0g.onrender.com/api`,
  }),
  tagTypes: ['Movies'],
  endpoints: builder => ({
    getTopFilms: builder.query({
      query: arg => {
        const {
          name = '',
          type = 'all',
          period = 'day',
          page = 1,
          lang = 'en-US',
        } = arg;
        return {
          url: name,
          params: { type: type, period: period, page: page, language: lang },
        };
      },
      providesTags: ['Movie'],
    }),
    getFilmActors: builder.query({
      query: name => `${name}/credits`,
      providesTags: ['Movie'],
    }),
    getFilmVideos: builder.query({
      query: name => {
        return `${name.split('&')[0]}/videos?language=${name.split('&')[1]}`;
      },
      providesTags: ['Movie'],
    }),
  }),
});

export const {
  useGetTopFilmsQuery,
  useGetFilmActorsQuery,
  useGetFilmVideosQuery,
} = moviesApi;
