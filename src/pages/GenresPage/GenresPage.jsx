// import Slider from 'react-slick';

// import { useGetTopFilmsQuery } from 'redux/moviesSlice';
// import settings from 'components/MovieList/movieListSettings';
// import { MovieCard } from 'components/MovieCard/MovieCard';
// import { useEffect, useState } from 'react';
// import { Box } from 'components/Box/Box';

// const GenrePage = () => {
//   const [sliderData, setSliderData] = useState([]);
//   const [page, setPage] = useState(1);
//   const { data } = useGetTopFilmsQuery({
//     type: 'movie',
//     period: 'day',
//     page: page,
//   });

//   return (
//     <Box
//       fontFamily="monospace"
//       bg="secondary"
//       color="text"
//       px={5}
//       py={3}
//       fontSize="m"
//       as="main"
//     >
//       <Slider {...settings}>
//         {data?.results?.map(item => (
//           <MovieCard key={item.id} movie={item} />
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default GenrePage;

// import React from 'react';
// import Slider from 'react-slick';
// import { useGetTopFilmsQuery } from 'redux/moviesSlice';
// import settings from 'components/MovieList/movieListSettings';
// import { useEffect, useState, useMemo } from 'react';
// import { Box } from 'components/Box/Box';
// import { MovieCard } from 'components/MovieCard/MovieCard';

// const GenrePage = () => {
//   const [sliderData, setSliderData] = useState([]);
//   localStorage.setItem('currentSlide', 0);
//   const [page, setPage] = useState(1);
//   const { data } = useGetTopFilmsQuery({
//     type: 'movie',
//     period: 'day',
//     page: page,
//   });

//   useEffect(() => {
//     if (data?.results) {
//       setSliderData(prevData => [...prevData, ...data.results]);
//     }
//   }, [data]);

//   const memoizedMovieCards = useMemo(
//     () => sliderData.map(item => <MovieCard key={item.id} movie={item} />),
//     [sliderData]
//   );

//   const handleSliderAfterChange = index => {
//     if (
//       index === sliderData.length - 5 ||
//       index === sliderData.length - 6 ||
//       index === sliderData.length - 7
//     ) {
//       setPage(prevPage => prevPage + 1);
//     }
//     localStorage.setItem('currentSlide', index);
//   };

//   return (
//     <Box
//       fontFamily="monospace"
//       bg="secondary"
//       color="text"
//       px={5}
//       py={3}
//       fontSize="m"
//       as="main"
//     >
//       <Slider
//         {...settings}
//         // initialSlide={0}
//         afterChange={handleSliderAfterChange}
//       >
//         {memoizedMovieCards}
//       </Slider>
//     </Box>
//   );
// };

// export default React.memo(GenrePage);
import CustomSlider from 'components/Slider/Slider';
const GenrePage = () => {
  return (
    <>
      <CustomSlider period={'day'} type={'movie'} />
    </>
  );
};

export default GenrePage;
