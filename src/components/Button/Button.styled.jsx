import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]};
  margin: ${p => p.theme.space[2]};
  padding: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.primary};
  }
`;
