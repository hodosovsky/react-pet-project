import { Box } from 'components/Box/Box';
import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Box position="absolute" top="50%" left="50%">
      <RotatingLines
        strokeColor="#05a"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};
