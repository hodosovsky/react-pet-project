import { Box } from 'components/Box/Box';
import { Link } from 'react-router-dom';
import { ReactComponent as ManAvatar } from '../../images/man.svg';
import { ReactComponent as WomanAvatar } from '../../images/woman.svg';

export const ActorsCard = ({ actor }) => {
  return (
    <Link to={`/actor/${actor.id}`}>
      <Box px={4}>
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
            alt={actor.name}
            width="100px"
          />
        ) : actor.gender === 0 ? (
          <ManAvatar width="100px" height="150px" />
        ) : (
          <WomanAvatar width="100px" height="150px" />
        )}
        <h4>{actor.name}</h4>
        <p>{actor.character}</p>
      </Box>
    </Link>
  );
};
