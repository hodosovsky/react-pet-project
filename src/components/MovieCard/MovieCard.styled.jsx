import { Box } from 'components/Box/Box';
import styled from 'styled-components';

export const MovieCardStyled = styled(Box)`
  cursor: pointer;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.text};
  transition: transform 0.3s;
  width: 200px;
  border-radius: ${p => p.theme.radii.normal};
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;
export const ImgContainer = styled(Box)`
  & img {
    border-top-right-radius: ${p => p.theme.radii.normal};
    border-top-left-radius: ${p => p.theme.radii.normal};
  }
`;
export const Indicator = styled.div`
  position: absolute;
  top: 30px;
  left: 27px;
  color: ${p => p.theme.colors.white};
`;
