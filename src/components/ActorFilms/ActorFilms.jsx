import { Link } from 'react-router-dom';
import { StyledContainer, StyledFilmList } from './ActorFilms.styled';
import defaultPoster from '../../images/default_poster.jpg';

export const ActorsFilms = ({ data }) => {
  console.log('data:', data);
  return (
    <StyledContainer>
      <StyledFilmList>
        {data.map((el, idx) => (
          <li key={el.id}>
            <Link to={`/movie/${el.id}`}>
              <img
                src={
                  el.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${el.poster_path}`
                    : defaultPoster
                }
                alt={data.title}
              />
              <h3>{el.title}</h3>
            </Link>
          </li>
        ))}
      </StyledFilmList>
    </StyledContainer>
  );
};
