import { Box } from 'components/Box/Box';
import { StyledTeamList } from './TeamList.styled';
import { Link } from 'react-router-dom';

export const TeamList = ({ filmCrew }) => {
  const result = {};

  for (let i = 0; i < filmCrew?.length; i += 1) {
    if (!result[filmCrew[i].id]) {
      result[filmCrew[i].id] = filmCrew[i];
    } else {
      result[filmCrew[i].id] = {
        ...result[filmCrew[i].id],
        job: result[filmCrew[i].id].job + ', ' + filmCrew[i].job,
      };
    }
  }

  const resArr = Object.values(result);
  return (
    <Box>
      <StyledTeamList>
        {filmCrew &&
          resArr.map(el => (
            <li key={el.id}>
              <Link to={`person/${el.id}`}>
                <h3>{el.name}</h3>
                <h4>{el.job}</h4>
              </Link>
            </li>
          ))}
      </StyledTeamList>
    </Box>
  );
};
