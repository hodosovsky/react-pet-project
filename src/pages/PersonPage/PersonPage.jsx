import { ActorsFilms } from 'components/ActorFilms/ActorFilms';
import { ActorInfo } from 'components/ActorInfo/ActorInfo';
import { Box } from 'components/Box/Box';
import { Spinner } from 'components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import {
  useGetActorInfoQuery,
  useGetFilmsByActorQuery,
} from 'redux/moviesSlice';

const PersonPage = () => {
  const { personId } = useParams();

  const initLang = JSON.parse(localStorage.getItem('lang'));
  const { data } = useGetActorInfoQuery({ personId, lang: initLang });
  const { data: ActorsFilm } = useGetFilmsByActorQuery({
    personId,
    lang: initLang,
  });

  return (
    <Box display="flex" p={5}>
      {data && ActorsFilm ? (
        <>
          <Box flexShrink="0">
            <img
              src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
              alt={data.name}
            />
          </Box>
          <Box pl={5}>
            <ActorInfo data={data} />
            <ActorsFilms data={ActorsFilm?.cast} />
          </Box>
        </>
      ) : (
        <Spinner />
      )}
    </Box>
  );
};

export default PersonPage;
