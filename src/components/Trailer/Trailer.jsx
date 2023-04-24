import { Box } from 'components/Box/Box';

export const Trailer = ({ url, name }) => {
  return (
    <Box py={4} display="flex" justifyContent="center">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=1`}
        title={name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
};
