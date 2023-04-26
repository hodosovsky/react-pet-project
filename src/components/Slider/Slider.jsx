import React from 'react';
import Slider from 'react-slick';
import { useGetTopFilmsQuery } from 'redux/moviesSlice';
import settings from 'components/MovieList/movieListSettings';
import { useEffect, useState, useMemo } from 'react';
import { Box } from 'components/Box/Box';
import { MovieCard } from 'components/MovieCard/MovieCard';

const CustomSlider = ({ type, period }) => {
  const [sliderData, setSliderData] = useState([]);
  const [page, setPage] = useState(1);
  const { data } = useGetTopFilmsQuery({
    type,
    period,
    page,
  });

  useEffect(() => {
    if (data?.results) {
      setSliderData(prevData => [...prevData, ...data.results]);
    }
  }, [data]);

  const memoizedMovieCards = useMemo(
    () => sliderData.map(item => <MovieCard key={item.id} movie={item} />),
    [sliderData]
  );

  const handleSliderAfterChange = index => {
    console.log('index:', index);
    if (
      index === sliderData.length - 5 ||
      index === sliderData.length - 6 ||
      index === sliderData.length - 7
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <Box
      fontFamily="monospace"
      bg="secondary"
      color="text"
      px={5}
      py={3}
      fontSize="m"
      as="main"
    >
      <Slider
        {...settings}
        initialSlide={10}
        afterChange={handleSliderAfterChange}
      >
        {memoizedMovieCards}
      </Slider>
    </Box>
  );
};

export default CustomSlider;
