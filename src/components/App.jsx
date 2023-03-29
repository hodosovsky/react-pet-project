import styled from 'styled-components';
import { Button } from './Button/Button';
import { AiFillAndroid, AiFillCar } from 'react-icons/ai';
import { Box } from './Box/Box';

const Text = styled.p`
  /* color: ${p => p.theme.colors.primary}; */
  /* font-family: ${p => p.theme.fonts.monospace}; */
  /* font-size: ${p => p.theme.fontSizes.xl}; */
  /* font-weight: ${p => p.theme.fontWeight.normal}; */
  border: ${p => p.theme.borders.mormal}${p => p.theme.colors.primary};
  /* padding: ${p => p.theme.space[3]}; */
`;

export const App = () => {
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
      display="flex"
      justifyContent="senter"
      alignItems="center"
      as="main"
    >
      <Text>homework template</Text>
      <Button icon={AiFillCar}>Кнопка</Button>
      <Button>search</Button>
      <Button icon={AiFillAndroid} type="submit" disabled>
        LogIn
      </Button>
    </Box>
  );
};
