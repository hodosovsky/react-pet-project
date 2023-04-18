import styled from 'styled-components';

export const MovieCardStyled = styled.div`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  /* background-color: ${p => p.theme.colors.text}; */
  transition: transform 0.3s;
  min-height: 450px;
  height: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &:hover {
    transform: scale(1.1);
  }
  &:h4 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  /* & img {
    width: 100%;
    height: 50%;
  } */
`;

export const Indicator = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; */
  position: absolute;
  top: 30px;
  left: 27px;

  /* width: 100%;
  height: 100%; */
  /* margin: 0 auto; */
  /* font-size: 2.2em; */
  /* font-weight: 100; */

  user-select: none;
`;
