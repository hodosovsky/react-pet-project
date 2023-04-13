// import { createSlice } from '@reduxjs/toolkit';
// import { authApi } from '../api/authApi';

// const initialState = {
//   user: { name: '', email: '' },
//   token: null,
//   isLoggedin: false,
// };

// export const AuthSlice = createSlice({
//   name: 'authApi',
//   initialState,

//   extraReducers: builder => {
//     builder.addMatcher(
//       authApi.endpoints.userSignup.matchFulfilled,
//       (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedin = true;
//       }
//     );
//     builder.addMatcher(
//       authApi.endpoints.userLogin.matchFulfilled,
//       (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedin = true;
//       }
//     );
//     builder.addMatcher(
//       authApi.endpoints.getCurrentUser.matchFulfilled,
//       (state, { payload }) => {
//         state.user = payload;
//         state.isLoggedin = true;
//       }
//     );
//     builder.addMatcher(
//       authApi.endpoints.userLogout.matchFulfilled,
//       (state, _) => {
//         return (state = initialState);
//       }
//     );
//   },
// });

// export const getUserName = state => state.auth.user.name;
// export const getToken = state => state.auth.token;
// export const getLoggedin = state => state.auth.isLoggedin;
