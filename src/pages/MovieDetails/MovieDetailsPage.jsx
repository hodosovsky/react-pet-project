import { Box } from 'components/Box/Box';
import { RxDotFilled } from 'react-icons/rx';
import { Link, useParams } from 'react-router-dom';
import ProgressBar from 'react-customizable-progressbar';
import { useGetFilmActorsQuery, useGetTopFilmsQuery } from 'redux/moviesSlice';

import { GenresList, Indicator, JobList } from './MovieDetail.styled';

const MovieDetailsPage = () => {
  const { moveiId } = useParams();
  const { data, isFetching } = useGetTopFilmsQuery(`${moveiId}`);
  const actors = useGetFilmActorsQuery(`${moveiId}`);

  const team = actors?.data?.crew.filter(
    el => el.job === 'Director' || el.job === 'Story' || el.job === 'Screenplay'
  );

  const result = {};

  for (let i = 0; i < team?.length; i += 1) {
    if (!result[team[i].id]) {
      result[team[i].id] = team[i];
    } else {
      result[team[i].id] = {
        ...result[team[i].id],
        job: result[team[i].id].job + ', ' + team[i].job,
      };
    }
  }

  const resArr = Object.values(result);

  return (
    <>
      {data && !isFetching && (
        <Box display="flex" py={5} px="40px">
          <img
            src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
            alt={data.original_title}
          />
          <Box pl={4}>
            <h1>
              {data.original_title} ({new Date(data.release_date).getFullYear()}
              )
            </h1>
            <Box display="flex">
              <p>
                {new Date(data.release_date).getDate()}/
                {new Date(data.release_date).getMonth()}/
                {new Date(data.release_date).getFullYear()} (
                {data.original_language}) <RxDotFilled />
              </p>
              <GenresList>
                {data.genres.map(el => (
                  <Link to={`genres/${el.id}`} key={el.id}>
                    <li>{el.name}</li>
                  </Link>
                ))}
              </GenresList>
              <RxDotFilled />
              {Math.floor(data.runtime / 60)}h{' '}
              {data.runtime - Math.floor(data.runtime / 60) * 60}m
            </Box>
            <Box
              position="relative"
              width="150px"
              display="flex"
              alignItems="center"
            >
              <ProgressBar
                progress={data.vote_average * 10}
                radius={30}
                strokeWidth={7}
                strokeColor="green"
                trackStrokeWidth={10}
                pointerFillColor="cardBackground"
                fillColor="cardBackground"
              />

              <Indicator>
                <div>{data.vote_average.toFixed(1)}</div>
              </Indicator>
              <h5>Оцінка користувачів</h5>
            </Box>
            <h3>{data.tagline}</h3>
            <br />
            <h3>Опис</h3>
            <br />
            <h5>{data.overview}</h5>
            <br />
            {resArr && (
              <Box>
                <JobList>
                  {team &&
                    resArr.map(el => (
                      <li key={el.id}>
                        <Link to={`person/${el.id}`}>
                          <h3>{el.name}</h3>
                          <h4>{el.job}</h4>
                        </Link>
                      </li>
                    ))}
                </JobList>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default MovieDetailsPage;
