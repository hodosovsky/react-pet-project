import { RotatingLines } from 'react-loader-spinner';
// import { AiFillAndroid, AiFillCar } from 'react-icons/ai';
import styled from 'styled-components';
// import { Button } from 'components/Button/Button';

import { useGetTopFilmsQuery } from 'redux/moviesSlice';
import { Box } from 'components/Box/Box';
import { MovieList } from 'components/MovieList/MovieList';

const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};

  /* font-weight: ${p => p.theme.fontWeight.normal}; */

  border: ${p => p.theme.borders.mormal};
  /* padding: ${p => p.theme.space[3]}; */
`;

const HomePage = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [userLogin, { isSuccess, isError }] = useLoginMutation();
  const { data, isFetching } = useGetTopFilmsQuery('?period=day');
  const weeksTrand = useGetTopFilmsQuery('?period=week');
  const tvShow = useGetTopFilmsQuery('?type=tv');

  // const token = useSelector(getToken);
  // const isLogdedin = useSelector(getLoggedin);

  // const [fetchUser] = useLazyGetCurrentUserQuery();

  // useEffect(() => {
  //   if (!isLogdedin && token) {
  //     fetchUser(null, { skip: !token });
  //   }
  // }, [fetchUser, isLogdedin, token]);

  // useEffect(() => {
  //   isError && console.log('Invalid email or password');
  // }, [isSuccess, isError]);

  // const stateMap = {
  //   email: setEmail,
  //   password: setPassword,
  // };

  // const handleAddInputData = event => {
  //   const { name } = event.target;
  //   stateMap[name](event.target.value);
  // };

  // const reset = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {};

  //   user.email = email;
  //   user.password = password;

  //   userLogin(user);

  //   reset();
  // };
  return (
    <Box
      fontFamily="monospace"
      bg="secondary"
      color="text"
      px={5}
      py={3}
      // height="100%"
      // width="100%"
      fontSize="m"
      // display="flex"
      // flexWrap="wrap"
      // justifyContent="center"
      // alignItems="center"
      as="main"
    >
      {/* <Text>homework template</Text>
        <Button icon={AiFillCar}>Кнопка</Button>
        <Button>search</Button> */}

      {/* <form onSubmit={handleSubmit}>
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
        </form> */}
      {isFetching && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {data && weeksTrand.data && tvShow.data && (
        <>
          <Text>У тренді сьогодні:</Text>
          {data && !isFetching && <MovieList data={data.results} />}
          <Text>У трендах на цьому тижні:</Text>
          {weeksTrand?.data && !weeksTrand.isFetching && (
            <MovieList data={weeksTrand.data.results} />
          )}
          <Text>У трендах на ТБ:</Text>
          {tvShow?.data && !tvShow.isFetching && (
            <MovieList data={tvShow.data.results} />
          )}
        </>
      )}

      {/* {data && !isFetching && <MovieList data={data.results} />} */}
      {/* <Slider {...settings}>{movieList}</Slider> */}
      {/* {isError && <h1>{error?.data}</h1>} */}
    </Box>
  );
};

export default HomePage;
