import { Box } from 'components/Box/Box';
import { Indicator, MovieCardStyled } from './MovieCard.styled';
import ProgressBar from 'react-customizable-progressbar';

export const MovieCard = ({ movie }) => {
  return (
    <MovieCardStyled>
      <Box height="350px" position="relative">
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title ? movie.title : movie.name}
        />
        <Box position="relative" top="-40px" right="-130px">
          <ProgressBar
            progress={movie.vote_average * 10}
            radius={20}
            strokeWidth={4}
            strokeColor="green"
            trackStrokeWidth={7}
            pointerFillColor="black"
            fillColor="black"
          />
          <Indicator className="indicator">
            <div>{movie.vote_average.toFixed(1)}</div>
          </Indicator>
        </Box>
      </Box>
      <Box p={3} display="flex" flexDirection="column" alignItems="stretch">
        <h4>{movie.title ? movie.title : movie.name}</h4>
        <p>{`Release: ${
          movie.release_date
            ? new Date(movie.release_date).getFullYear()
            : new Date(movie.first_air_date).getFullYear()
        }`}</p>
      </Box>
    </MovieCardStyled>
  );
};
