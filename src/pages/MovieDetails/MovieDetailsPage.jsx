import { Box } from 'components/Box/Box';
import { useParams } from 'react-router-dom';
import {
  useGetFilmActorsQuery,
  useGetFilmVideosQuery,
  useGetTopFilmsQuery,
} from 'redux/moviesSlice';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { TeamList } from 'components/TeamList/TeamList';
import { Trailer } from 'components/Trailer/Trailer';
import { Spinner } from 'components/Spinner/Spinner';

const MovieDetailsPage = () => {
  const { moveiId } = useParams();
  const initLang = JSON.parse(localStorage.getItem('lang'));
  const { data, isFetching } = useGetTopFilmsQuery(
    `${moveiId}?language=${initLang}`
  );
  const team = useGetFilmActorsQuery(`${moveiId}`);

  const filmCrew = team?.data?.crew.filter(
    el => el.job === 'Director' || el.job === 'Story' || el.job === 'Screenplay'
  );
  const videos = useGetFilmVideosQuery(`${moveiId}&${initLang}`);

  const trailer = videos?.data?.results[videos?.data?.results?.length - 1];

  return (
    <>
      {data && !isFetching ? (
        <Box>
          {trailer && <Trailer url={trailer.key} name={trailer.name} />}

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
        </Box>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default MovieDetailsPage;
