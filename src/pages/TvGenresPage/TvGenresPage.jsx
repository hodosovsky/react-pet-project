import { Box } from 'components/Box/Box';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  useGetTvByGenreQuery,
  useGetTvGenresListQuery,
} from 'redux/moviesSlice';
import { StyledList } from './TvGenres.styled';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TvGenrePage = () => {
  const { genreId } = useParams();
  const initLang = JSON.parse(localStorage.getItem('lang'));
  const [movies, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { t } = useTranslation();
  const { data } = useGetTvByGenreQuery({
    id: genreId,
    page: currentPage,
  });
  const { data: genres, isLoading: isGenreLoading } =
    useGetTvGenresListQuery(initLang);

  const filmGenre = genres?.genres?.find(el => el.id === +genreId);

  useEffect(() => {
    if (data?.results) {
      setMovies(prevData => [...prevData, ...data.results]);
      setTotalPages(data.total_pages);
    }
  }, [data]);

  return (
    <Box p={5} textAlign="center">
      {!isGenreLoading && (
        <h1>{`${t('genre.name')}: ${filmGenre?.name.toUpperCase()}`} </h1>
      )}
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setCurrentPage(prev => prev + 1)}
        hasMore={movies.length < totalPages}
        loader={<h4>Loading...</h4>}
      >
        <StyledList>
          {movies.map(el => (
            <MovieCard key={el.id} movie={el} />
          ))}
        </StyledList>
      </InfiniteScroll>
    </Box>
  );
};

export default TvGenrePage;
