import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const apiKey = 'k_cxax043y';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://movies-1l0g.onrender.com/api/`,
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    // login: builder.query({
    //   query: name => name,
    //   providesTags: ['Auth'],
    // }),
    login: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useUserLogoutMutation,
} = authApi;
