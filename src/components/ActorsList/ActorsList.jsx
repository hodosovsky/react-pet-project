import { ActorsCard } from 'components/ActorsCard/ActorsCard';
import Slider from 'react-slick';
import settings from './settings';
import { Box } from 'components/Box/Box';

export const ActorsList = ({ data }) => {
  const renderActors = data?.map(item => (
    <ActorsCard key={item.id} actor={item} />
  ));

  return (
    <Box mb="30px">
      <Slider {...settings}>{renderActors}</Slider>
    </Box>
  );
};
