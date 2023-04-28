import { Box } from 'components/Box/Box';
import styled from 'styled-components';

export const StyledContainer = styled(Box)`
  max-width: 1200px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-right: 0;
`;

export const StyledFilmList = styled.ul`
  display: flex;
  margin-top: 8px;
  gap: 20px;

  & li {
    border-radius: ${p => p.theme.radii.light};
    text-align: center;

    & img {
      min-width: 130px;
      height: 195px;
      padding-bottom: 8px;
      border-radius: ${p => p.theme.radii.light};
    }
  }
`;
