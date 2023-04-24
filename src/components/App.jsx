import { useLazyGetCurrentUserQuery } from 'redux/api/authApi';
import { getLoggedin, getToken } from '../redux//slice/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from 'pages/MovieDetails/MovieDetailsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import GenrePage from 'pages/GenresPage/GenresPage';

export const App = () => {
  const token = useSelector(getToken);
  const isLogdedin = useSelector(getLoggedin);

  const [fetchUser] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    if (!isLogdedin && token) {
      fetchUser(null, { skip: !token });
    }
  }, [fetchUser, isLogdedin, token]);

  return (
    <>
      <BrowserRouter basename="react-pet-project">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="movie/:moveiId" element={<MovieDetailsPage />} />
            <Route path="genres/:genreId" element={<GenrePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
