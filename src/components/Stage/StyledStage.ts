import styled from 'styled-components';

interface Props {
  height: number;
  width: number;
}

const StyledStage = styled.div<Props>`
  position: relative;
  display: grid;
  grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}));
  grid-template-columns: repeat(${props => props.width}, 1fr);
  box-shadow: -20px 14px 28px rgba(0, 0, 0, 0.6), 50px 10px 10px rgba(0, 0, 0, 0.6);
  border-style: outset;
  border-bottom-style: inset;
  border-width: 10px;
  border-color: #d2ffd6 #c7f1cc #caf4d0 #a0bda4;

  @media screen and (max-width: 756px) {
    transform: scale(1.2);
    margin-bottom: 30px;
    border-width: 8px;
  }

  @media screen and (max-width: 596px) {
    transform: scale(1.5);
    margin-bottom: 50px;
    border-width: 5px;
  }

  @media screen and (max-width: 450px) {
    transform: scale(1.8);
    margin-bottom: 70px;
  }
`;

export default StyledStage;
