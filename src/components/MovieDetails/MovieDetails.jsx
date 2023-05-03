import { Box } from 'components/Box/Box';
import { GenresList, Indicator } from './MovieDetails.styled';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-customizable-progressbar';

export const MovieDetails = ({ data }) => {
  console.log('data:', data);
  return (
    <>
      <h1>
        {data.title ? data.title : data.original_title || data.name} (
        {data.release_date
          ? new Date(data.release_date).getFullYear()
          : new Date(data.first_air_date).getFullYear()}
        )
      </h1>
      <Box display="flex">
        <p>
          {data.release_date
            ? new Date(data.release_date).getDate()
            : new Date(data.first_air_date).getDate()}
          /
          {data.release_date
            ? new Date(data.release_date).getMonth()
            : new Date(data.first_air_date).getMonth()}
          /
          {data.release_date
            ? new Date(data.release_date).getFullYear()
            : new Date(data.first_air_date).getFullYear()}{' '}
          ({data.original_language}
          ) <RxDotFilled />
        </p>
        <GenresList>
          {data.genres.map(el => (
            <Link
              to={data.name ? `/tv/genres/${el.id}` : `/genres/${el.id}`}
              key={el.id}
            >
              <li>{el.name}</li>
            </Link>
          ))}
        </GenresList>
        <RxDotFilled />
        {data.runtime && `${Math.floor(data.runtime / 60)}h `}
        {data.runtime &&
          `${data.runtime - Math.floor(data.runtime / 60) * 60}m`}
      </Box>
      <Box position="relative" width="150px" display="flex" alignItems="center">
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
    </>
  );
};
