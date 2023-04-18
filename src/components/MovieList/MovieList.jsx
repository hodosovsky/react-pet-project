import { MovieCard } from 'components/MovieCard/MovieCard';
import Slider from 'react-slick';

export const MovieList = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderMovies = data.map(item => (
    <MovieCard key={item.id} movie={item} />
  ));
  return (
    <>
      <Slider {...settings}>{renderMovies}</Slider>
    </>
  );
};

//   style={{
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     gap: 40,
//     listStyle: 'none',
//     paddingLeft: 0,
//   }}

/* {data.map(item => (
          <MovieCard key={item.id} movie={item}
          />
      ))
          } */
