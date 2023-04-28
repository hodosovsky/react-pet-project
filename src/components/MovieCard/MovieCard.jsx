import { Box } from 'components/Box/Box';
import { ImgContainer, Indicator, MovieCardStyled } from './MovieCard.styled';
import ProgressBar from 'react-customizable-progressbar';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  return (
    <MovieCardStyled>
      <Link to={`/movie/${movie.id}`}>
        <ImgContainer>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title ? movie.title : movie.name}
          />
          <Box position="absolute" top="35px" left="10px" color="white">
            <p>{`${
              movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : new Date(movie.first_air_date).getFullYear()
            }`}</p>
          </Box>

          <Box position="absolute" top="5px" right="-13px">
            <ProgressBar
              progress={movie.vote_average * 10}
              radius={20}
              strokeWidth={4}
              strokeColor={
                movie.vote_average > 7
                  ? 'green'
                  : movie.vote_average > 5
                  ? 'orange'
                  : 'red'
              }
              trackStrokeWidth={7}
              pointerFillColor="cardBackground"
              fillColor="cardBackground"
            />
            <Indicator>
              <div>{movie.vote_average.toFixed(1)}</div>
            </Indicator>
          </Box>
        </ImgContainer>
        <Box textAlign="center" py={4} color="white" height="70px">
          <h4>{movie.title ? movie.title : movie.name}</h4>
        </Box>
      </Link>
    </MovieCardStyled>
  );
};
