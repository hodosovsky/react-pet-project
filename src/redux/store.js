import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from './pokemon';
import { moviesApi } from './moviesSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    moviesApi.middleware,
  ],
});

setupListeners(store.dispatch);
