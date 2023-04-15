import { createSlice } from '@reduxjs/toolkit';
import { AuthApi } from '../api/authApi';

const initialState = {
  user: { email: '' },
  token: null,
  isLoggedin: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      AuthApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedin = true;
      }
    );
    builder.addMatcher(
      AuthApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedin = true;
      }
    );
    builder.addMatcher(
      AuthApi.endpoints.userLogout.matchFulfilled,
      (state, _) => {
        return (state = initialState);
      }
    );
  },
});

// export const getUserName = state => state.auth?.user?.name;
export const getToken = state => state.auth?.token;
export const getLoggedin = state => state.auth?.isLoggedin;
