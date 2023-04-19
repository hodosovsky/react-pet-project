import { MovieCard } from 'components/MovieCard/MovieCard';
import Slider from 'react-slick';
import settings from './movieListSettings';
export const MovieList = ({ data }) => {
  const renderMovies = data.map(item => (
    <MovieCard key={item.id} movie={item} />
  ));
  console.log('renderMovies:', renderMovies);
  return <Slider {...settings}>{renderMovies}</Slider>;
};
