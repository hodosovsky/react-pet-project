import { Link } from 'react-router-dom';
import { StyledContainer, StyledFilmList } from './ActorFilms.styled';
import defaultPoster from '../../images/default_poster.jpg';
import { useTranslation } from 'react-i18next';

export const ActorsFilms = ({ actorsFilm, actorsSerials }) => {
  const { t } = useTranslation();
  const films = [...actorsFilm, ...actorsSerials];
  console.log('films:', films);
  const sortedFilms = films.sort((a, b) => b.vote_count - a.vote_count);

  return (
    <StyledContainer>
      <StyledFilmList>
        {sortedFilms.map((el, idx) => (
          <li key={el.id}>
            <Link to={el.title ? `/movie/${el.id}` : `/serial/${el.id}`}>
              <img
                src={
                  el.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${el.poster_path}`
                    : defaultPoster
                }
                alt={el.title}
              />
              <h3>
                {el.title ? el.title : `${el.name} ${t('actorPage.tvShow')}`}
              </h3>
            </Link>
          </li>
        ))}
      </StyledFilmList>
    </StyledContainer>
  );
};
