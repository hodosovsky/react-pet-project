import { MovieCard } from 'components/MovieCard/MovieCard';
import Slider from 'react-slick';
import settings from './movieListSettings';
import { Box } from 'components/Box/Box';
export const MovieList = ({ data }) => {
  const renderMovies = data.map(item => (
    <MovieCard key={item.id} movie={item} />
  ));

  return (
    <Box py={4}>
      <Slider {...settings}>{renderMovies}</Slider>
    </Box>
  );
};
