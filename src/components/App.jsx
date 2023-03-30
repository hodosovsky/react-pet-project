import styled from 'styled-components';
import { Button } from './Button/Button';
import { AiFillAndroid, AiFillCar } from 'react-icons/ai';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from './Box/Box';
import { useGetTopFilmsQuery } from 'redux/moviesSlice';

const Text = styled.p`
  /* color: ${p => p.theme.colors.primary}; */
  /* font-family: ${p => p.theme.fonts.monospace}; */
  /* font-size: ${p => p.theme.fontSizes.xl}; */
  /* font-weight: ${p => p.theme.fontWeight.normal}; */

  border: ${p => p.theme.borders.mormal};
  /* padding: ${p => p.theme.space[3]}; */
`;

export const App = () => {
  const { data, error, isFetching, isError } =
    useGetTopFilmsQuery('MostPopularMovies');
  console.log('isFetching:', isFetching);
  console.log('data:', data);

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
      <Button icon={AiFillAndroid} type="submit" disabled>
        LogIn
      </Button>
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
          {data.items.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}

      {isError && <h1>{error.data}</h1>}
    </Box>
  );
};
