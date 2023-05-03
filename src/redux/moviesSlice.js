import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const key = 'f27eea818d2010463700365b0c06a16e';
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3`,
  }),
  tagTypes: ['Movies'],
  endpoints: builder => ({
    getTopFilms: builder.query({
      query: ({ type = 'all', period = 'day', page = 1 }) => ({
        url: `trending/${type}/${period}`,
        params: {
          page: page,
          api_key: key,
        },
      }),
      providesTags: ['Movie'],
    }),
    getFilmDetails: builder.query({
      query: ({ id, lang = 'en-US' }) => ({
        url: `movie/${id}`,
        params: { language: lang, api_key: key },
      }),
      providesTags: ['Movie'],
    }),
    getTvDetails: builder.query({
      query: ({ id, lang = 'en-US' }) => ({
        url: `tv/${id}`,
        params: { language: lang, api_key: key },
      }),
      providesTags: ['Movie'],
    }),
    getFilmActors: builder.query({
      query: id => ({ url: `movie/${id}/credits`, params: { api_key: key } }),

      providesTags: ['Movie'],
    }),
    getFilmVideos: builder.query({
      query: ({ id, lang = 'en-US' }) => ({
        url: `movie/${id}/videos`,
        params: { language: lang, api_key: key },
      }),
      providesTags: ['Movie'],
    }),
    getFilmByGenre: builder.query({
      query: ({ id, page = 1 }) => ({
        url: `/discover/movie?with_genres=${id}&page=${page}`,
        params: { api_key: key },
      }),
      providesTags: ['Movie'],
    }),
    getGenresList: builder.query({
      query: lang => ({
        url: `genre/movie/list`,
        params: { api_key: key, language: lang },
      }),
      providesTags: ['Movie'],
    }),
    getActorInfo: builder.query({
      query: ({ personId, lang = 'en-US' }) => ({
        url: `person/${personId}`,
        params: { api_key: key, language: lang },
      }),
      providesTags: ['Movie'],
    }),
    getFilmsByActor: builder.query({
      query: ({ personId, lang = 'en-US' }) => ({
        url: `person/${personId}/movie_credits`,
        params: { api_key: key, language: lang },
      }),
      providesTags: ['Movie'],
    }),
    gettvShowsByActor: builder.query({
      query: ({ personId, lang = 'en-US' }) => ({
        url: `person/${personId}/tv_credits`,
        params: { api_key: key, language: lang },
      }),
      providesTags: ['Movie'],
    }),
  }),
});

export const {
  useGetTopFilmsQuery,
  useGetFilmDetailsQuery,
  useGetTvDetailsQuery,
  useGetFilmActorsQuery,
  useGetFilmVideosQuery,
  useGetFilmByGenreQuery,
  useGetGenresListQuery,
  useGetActorInfoQuery,
  useGetFilmsByActorQuery,
  useGettvShowsByActorQuery,
} = moviesApi;
