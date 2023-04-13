import styled from 'styled-components';
import { Button } from './Button/Button';
import { AiFillAndroid, AiFillCar } from 'react-icons/ai';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from './Box/Box';
import { useGetTopFilmsQuery } from 'redux/moviesSlice';
import { useLoginMutation } from 'redux/api/authApi';
// import { getLoggedin, getToken } from '../redux//slice/authSlice';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

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
  const [userLogin] = useLoginMutation();
  const { data, error, isFetching, isError } = useGetTopFilmsQuery('/');
  // const token = useSelector(getToken);
  // const isLogdedin = useSelector(getLoggedin);

  // const [fetchUser] = useLazyGetCurrentUserQuery;
  // useEffect(() => {
  //   if (!isLogdedin && token) {
  //     fetchUser(null, { skip: !token });
  //   }
  // }, [fetchUser, isLogdedin, token]);
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

    console.log('user:', user);
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
      fontSize="xl"
      // display="flex"
      // justifyContent="senter"
      // alignItems="center"
      as="main"
    >
      <Text>homework template</Text>
      <Button icon={AiFillCar}>Кнопка</Button>
      <Button>search</Button>

      <form onSubmit={handleSubmit}>
        <input type="email" onChange={handleAddInputData} name="email" />
        <br />
        <input type="password" onChange={handleAddInputData} name="password" />
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
      {data && !isFetching && !isError && (
        <ul>
          {data.results.map(item => (
            <li key={item.id}>
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

      {isError && <h1>{error.data}</h1>}
    </Box>
  );
};
