import styled from 'styled-components';

const StyledStageOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  pointer-events: none;
  white-space: nowrap;
  background: #000000;
  border-radius: 5px;
  opacity: 0.9;
  text-align: center;

  @media screen and (max-width: 1200px) {
    padding: 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 10px;
  }

  @media screen and (max-width: 756px) {
    padding: 8px;
  }

  @media screen and (max-width: 596px) {
    padding: 5px;
  }

  @media screen and (max-width: 400px) {
    padding: 3px;
  }
`;

export default StyledStageOverlay;
