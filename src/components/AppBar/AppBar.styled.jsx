import { Box } from 'components/Box/Box';
import styled from 'styled-components';

export const StyledAppBar = styled(Box)`
  gap: 40px;
`;
export const StyledNav = styled(Box)`
  gap: ${p => p.theme.space[3]};
`;
