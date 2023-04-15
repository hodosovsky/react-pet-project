import styled from 'styled-components';
import { Button } from './Button/Button';
import { AiFillAndroid, AiFillCar } from 'react-icons/ai';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from './Box/Box';
import { useGetTopFilmsQuery } from 'redux/moviesSlice';
import {
  useLoginMutation,
  useLazyGetCurrentUserQuery,
} from 'redux/api/authApi';
import { getLoggedin, getToken } from '../redux//slice/authSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Text = styled.p`
  /* color: ${p => p.theme.colors.primary}; */
  /* font-family: ${p => p.theme.fonts.monospace}; */
  /* font-size: ${p => p.theme.fontSizes.xl}; */
  /* font-weight: ${p => p.theme.fontWeight.normal}; */

  border: ${p => p.theme.borders.mormal};
  /* padding: ${p => p.theme.space[3]}; */
`;

export const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLogin, { isSuccess, isError }] = useLoginMutation();
  const { data, error, isFetching } = useGetTopFilmsQuery('/');
  const token = useSelector(getToken);

  const isLogdedin = useSelector(getLoggedin);

  const [fetchUser] = useLazyGetCurrentUserQuery();
  useEffect(() => {
    if (!isLogdedin && token) {
      fetchUser(null, { skip: !token });
    }
  }, [fetchUser, isLogdedin, token]);

  useEffect(() => {
    isError && console.log('Invalid email or password');
  }, [isSuccess, isError]);

  const stateMap = {
    email: setEmail,
    password: setPassword,
  };

  const handleAddInputData = event => {
    const { name } = event.target;
    stateMap[name](event.target.value);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = {};

    user.email = email;
    user.password = password;

    userLogin(user);

    reset();
  };

  return (
    <Box
      fontFamily="monospace"
      bg="secondary"
      color="text"
      px={5}
      py={8}
      height="100%"
      width="100%"
      fontSize="m"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      // alignItems="center"
      as="main"
    >
      <Text>homework template</Text>
      <Button icon={AiFillCar}>Кнопка</Button>
      <Button>search</Button>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleAddInputData}
          value={email}
          name="email"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          onChange={handleAddInputData}
          value={password}
          name="password"
          placeholder="password"
        />
        <Button icon={AiFillAndroid} type="submit">
          LogIn
        </Button>
      </form>
      {isFetching && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}

      {data && !isFetching && (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 40,
            listStyle: 'none',
            paddingLeft: 0,
          }}
        >
          {data.results.map(item => (
            <li key={item.id} style={{ width: 200 }}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                alt={item.title ? item.title : item.name}
              />
              <br />
              {item.title ? item.title : item.name}
            </li>
          ))}
        </ul>
      )}

      {isError && <h1>{error?.data}</h1>}
    </Box>
  );
};
