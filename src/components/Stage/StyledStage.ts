import styled from "styled-components";

interface Props {
  height: number;
  width: number;
}

const StyledStage = styled.div<Props>`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
`;

export default StyledStage;
