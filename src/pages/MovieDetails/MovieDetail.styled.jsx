import styled from 'styled-components';

export const GenresList = styled.ul`
  display: flex;
  gap: 5px;
`;
export const Indicator = styled.div`
  position: absolute;
  top: 36px;
  left: 34px;
  font-size: 24px;
  color: ${p => p.theme.colors.white};
`;

export const JobList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
