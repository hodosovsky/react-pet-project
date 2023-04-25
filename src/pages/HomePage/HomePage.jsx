import styled from 'styled-components';
// import { useGetTopFilmsQuery } from 'redux/moviesSlice';
import { Box } from 'components/Box/Box';
// import { MovieList } from 'components/MovieList/MovieList';
import { useTranslation } from 'react-i18next';
// import { Spinner } from 'components/Spinner/Spinner';
// import { useState } from 'react';
import CustomSlider from 'components/Slider/Slider';

const Text = styled.p`
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.l};
  border: ${p => p.theme.borders.mormal};
`;

const HomePage = () => {
  // const [page] = useState(1);

  // const { data, isFetching } = useGetTopFilmsQuery({
  //   type: 'movie',
  //   period: 'week',
  //   page: page,
  // });

  // const weeksTrand = useGetTopFilmsQuery({
  //   type: 'movie',
  //   period: 'day',
  //   page: page,
  // });
  // const tvShow = useGetTopFilmsQuery({
  //   type: 'tv',
  //   period: 'week',
  //   page: page,
  // });
  const { t } = useTranslation();

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
      {/* {isFetching && weeksTrand.isFetching && tvShow.isFetching ? (
        <Spinner />
      ) : (
        <>
          {data && weeksTrand?.data && tvShow?.data && ( */}
      <>
        <Text>{t('main.trending')}</Text>
        <CustomSlider period={'week'} type={'movie'} />
        {/* <MovieList data={data.results} /> */}
        <Text>{t('main.trending today')}</Text>
        <CustomSlider period={'day'} type={'movie'} />
        {/* <MovieList data={weeksTrand.data.results} /> */}
        <Text>{t('main.trending on tv')} </Text>
        {/* <MovieList data={tvShow.data.results} /> */}
        <CustomSlider period={'week'} type={'tv'} />
      </>
      {/* )} */}
      {/* </> */}
      {/* // )} */}
    </Box>
  );
};

export default HomePage;
