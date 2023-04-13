import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from './pokemon';
import { moviesApi } from './moviesSlice';
import { authApi } from './api/authApi';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    moviesApi.middleware,
    authApi.middleware,
  ],
});

setupListeners(store.dispatch);
