import { Box } from 'components/Box/Box';

import { StyledButton } from 'components/Button/Button.styled';
import styled from 'styled-components';

export const StyledAppBar = styled(Box)`
  gap: 40px;
`;
export const StyledNav = styled(Box)`
  gap: ${p => p.theme.space[3]};
`;

export const LangButton = styled(StyledButton)`
  padding: ${p => p.theme.space[2]};
  background-color: ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.white};
  margin: ${p => p.theme.space[0]};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${p => p.theme.colors.transparent};
    color: ${p => p.theme.colors.white};
  }
`;
