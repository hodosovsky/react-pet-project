import { Box } from 'components/Box/Box';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetFilmByGenreQuery } from 'redux/moviesSlice';
import { StyledList } from './GenresPage.styled';

import { useEffect, useState } from 'react';

const GenrePage = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data } = useGetFilmByGenreQuery({
    id: genreId,
    page: currentPage,
  });

  useEffect(() => {
    if (data?.results) {
      setMovies(prevData => [...prevData, ...data.results]);
      setTotalPages(data.total_pages);
    }
  }, [data]);

  return (
    <Box p={5}>
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

export default GenrePage;
