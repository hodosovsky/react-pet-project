import { StyledButton } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  children,
  disabled = false,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
      {Icon && <Icon />}
    </StyledButton>
  );
};
