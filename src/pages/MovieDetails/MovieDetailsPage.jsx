import { Box } from 'components/Box/Box';
import { useParams } from 'react-router-dom';
import {
  useGetFilmActorsQuery,
  useGetFilmDetailsQuery,
  useGetFilmVideosQuery,
} from 'redux/moviesSlice';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { TeamList } from 'components/TeamList/TeamList';
import { Trailer } from 'components/Trailer/Trailer';
import { Spinner } from 'components/Spinner/Spinner';
import { ActorsList } from 'components/ActorsList/ActorsList';

const MovieDetailsPage = () => {
  const { moveiId } = useParams();
  const initLang = JSON.parse(localStorage.getItem('lang'));
  const { data, isFetching, isError } = useGetFilmDetailsQuery({
    id: moveiId,
    lang: initLang,
  });

  const team = useGetFilmActorsQuery(moveiId);

  const filmCrew = team?.data?.crew.filter(
    el => el.job === 'Director' || el.job === 'Story' || el.job === 'Screenplay'
  );
  const videos = useGetFilmVideosQuery({ id: moveiId, lang: initLang });

  const trailer = videos?.data?.results.filter(el => el.type === 'Trailer');

  return (
    <>
      {isError && <h1>No information about film</h1>}
      {data && !isFetching && !isError && (
        <Box
          backgroundImage={`linear-gradient(transparent, rgba(37, 37, 37, 0.61), rgb(17, 17, 17)), url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          color="white"
        >
          {trailer && trailer[0] && (
            <Trailer url={trailer[0]?.key} name={trailer[0]?.name} />
          )}

          <Box display="flex" py={5} px="40px">
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt={data.original_title}
            />
            <Box pl={4}>
              <MovieDetails data={data} />
              {filmCrew && <TeamList filmCrew={filmCrew} />}
            </Box>
          </Box>
          <ActorsList data={team?.data?.cast} />
        </Box>
      )}
      {isFetching && <Spinner />}
    </>
  );
};

export default MovieDetailsPage;
