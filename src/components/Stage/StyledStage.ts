import styled from 'styled-components';

interface Props {
  height: number;
  width: number;
}

const StyledStage = styled.div<Props>`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}));
  grid-template-columns: repeat(${props => props.width}, 1fr);
  box-shadow: -20px 14px 28px rgba(0, 0, 0, 0.6), 50px 10px 10px rgba(0, 0, 0, 0.6);
  //border-style: outset;
  //border-bottom-style: inset;
  //border-width: 10px;
  //border-color: #d2ffd6 #c7f1cc #caf4d0 #a0bda4;
`;

export default StyledStage;