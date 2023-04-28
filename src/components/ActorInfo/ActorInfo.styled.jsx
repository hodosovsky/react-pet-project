import styled from 'styled-components';
import { StyledButton } from 'components/Button/Button.styled';
import { Box } from 'components/Box/Box';

export const ActorInfoStyled = styled(Box)`
  & h1 {
    padding-bottom: ${p => p.theme.space[4]};
  }
  & h2 {
    padding-bottom: ${p => p.theme.space[3]};
  }
`;

export const ReadMoreStyled = styled(Box)`
  & p {
    line-height: ${p => p.theme.lineHeights.body};
    hyphens: auto;
    font-weight: 500;
    margin-bottom: 22px;
  }
`;

export const ReadMoreButton = styled(StyledButton)`
  color: ${p => p.theme.colors.primary};
  border: none;

  letter-spacing: 1px;
  cursor: pointer;
`;

//   button {
//     color: ${p => p.theme.colors.primary};
//     border: none;
//     text-decoration: underline;
//     letter-spacing: 1px;
//     cursor: pointer;
//   }
